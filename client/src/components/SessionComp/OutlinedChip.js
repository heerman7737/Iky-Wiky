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
        <button onClick={this.props.onClick}>{this.props.children}</button>
        </ul>
      </>
    )
  }
}

class OutlinedChip extends Component{
  handleClick=e=>{
    e.preventDefault()

    console.log(this.props.currentUser)
    // console.log(e.target.value)
    this.props.currentUser.createRoom({
      name: "Imperium",
      private:true,
      addUserIds:['admin']
    })
  }

    render(){
      return(
        <>
        {
        
          this.props.users.map((user,index)=>{
            if(user.id===this.props.currentUser.id){
              return(
                <OutlinedChipItem key={index} presenceState="online" onClick={this.handleClick}>
                  {user.name} (You)
                </OutlinedChipItem>
              )
            }
            return(
              <OutlinedChipItem key={index} presenceState={user.presence.state} onClick={this.handleClick} value={user.name}>
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
