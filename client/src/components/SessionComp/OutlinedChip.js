import React,{Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing(1),
  },
}));

class OutlinedChipItem extends Component{

  render(){
    return(
      <>
      <ul>
        <button name={this.props.name} id={this.props.id} onClick={this.props.onClick}>{this.props.children}</button>
        </ul>
      </>
    )
  }
}

class OutlinedChip extends Component{

  handleClick=e=>{
    e.preventDefault()

    // console.log(e.target.id)
   
   
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
