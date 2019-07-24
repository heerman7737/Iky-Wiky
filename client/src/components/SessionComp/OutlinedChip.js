import React,{Component} from 'react';



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

      </li>
    )
  }
}

class OutlinedChip extends Component{

  handleClick=e=>{
    e.preventDefault()

    console.log(e.target.id)
    console.log(e.target.name)
   
    this.props.currentUser.createRoom({
      name: `${e.target.name}`,
      private:true,
      addUserIds:[`${e.target.id}`]
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
