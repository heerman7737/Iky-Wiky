import React,{Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';




class OutlinedChipItem extends Component{

  render(){
    
    return(
      
      <li style={{listStyleType:"none", marginLeft:"10px"}}>
        <button
        style={{backgroundColor:this.props.presenceState==="online"? '#589d62' : '#b0d3bf' , height:"40px", width:"150px", borderRadius:"8px", marginTop:'5px' , fontWeight:'bold', fontSize:"15px", color:"white"} }    
        name={this.props.name} 
        id={this.props.id} 
        onClick={this.props.onClick}
        variant="outlined">

        {this.props.children}
        </button>
      {/* <p style={{display: "inline-block",marginLeft:"225px"}}>Haha</p> */}
      </li>
    )
  }
}

class OutlinedChip extends Component{
  state={
    room:null
  }

  handleClick=e=>{
    e.preventDefault()

    // console.log(e.target.id)
    // console.log(e.target.name)
    // console.log(this.props.currentUser)
    const {currentUser,rooms}=this.props
    console.log(currentUser,rooms)
    const privateChatCreated = rooms.filter(room=>{
      if(room.customData && room.customData.isDirectMessage){
          const arr =[currentUser.id,e.target.id]
          const {userIds}= room.customData
          if (arr.sort().join('') === userIds.sort().join('')) {
            return {
              room
            };
          }
        }
    
        return false;
      
    })
    if (privateChatCreated.length > 0) {
      return Promise.resolve(privateChatCreated[0]);
    }
    return this.props.currentUser.createRoom({
      name: `${e.target.name}`,
      private:true,
      addUserIds:[`${e.target.id}`],
      customData: {
        isDirectMessage: true,
        userIds: [currentUser.id, e.target.id]
      }
    })
    .then(room=>{
      this.setState({room})
      console.log(this.state.room)
    })

   
  }

    render(){
      return(

        <>
        {
        
          this.props.users.map((user,index)=>{

            if(user.id===this.props.currentUser.id){
              return(
                <OutlinedChipItem name={user.name} id={user.id} key={index} presenceState="online" onClick={this.handleClick}>
                  {user.name} (You)
                </OutlinedChipItem>
              )
            }
            return(
              <OutlinedChipItem name={user.name} id={user.id} key={index} presenceState={user.presence.state} onClick={this.handleClick} value={user.name}>
              {user.name}
            </OutlinedChipItem>
            )
          })
        }
      </>
      )
    }
}


export default OutlinedChip
