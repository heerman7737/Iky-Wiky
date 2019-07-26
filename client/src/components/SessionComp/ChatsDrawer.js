import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import RoomList from './RoomList'
import Fab from '@material-ui/core/Fab';
import Switch from '@material-ui/core/Switch';




const drawerWidth = '80%';


const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    background: 'linear-gradient( #525855, #b9c0ba)',
    
   
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
    
  }

}));

export default function ChatsDrawer(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }
 
  return (
    <div>
      
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerOpen}
            
          >
            <BubbleChartIcon />
          </IconButton>
      
      
      <Drawer
        style={{width: '100%'}}
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
          </div>
        <Divider />
        <Typography variant="h5" style={{textAlign: "center",fontFamily:'Leckerli One',color:'white',fontSize: '2.5rem'}}>
          Chat Rooms
      </Typography>
      <Divider />
  
            <RoomList
              currentUser={props.currentUser}
              rooms={props.rooms}
              action={props.action}
            />

         <Divider/>
      <GroupChatForm
      currentUser={props.currentUser}
      users={props.users}
      />
      </Drawer>
    </div>
  );
}

class GroupChatForm extends React.Component{
  state={
    roomName:null,
    users:this.props.users,
    // checkPublic:true,
    checkPrivate:false
  }

  createGroupChat=e=>{
    e.preventDefault();
    console.log(this.state.users)
    const arr = this.state.users.map(user=>{
      return user.id
    })

    console.log(arr)
    if (this.state.roomName === null) {
      alert("Please Enter Chatroom Name!");
    } else {
    this.props.currentUser.createRoom({
      name:`${this.state.roomName}`,
      private:false,
      addUserIds:arr
    })
  };
  }
  handleChange=e=>{
    e.preventDefault()
    // console.log(e.target.value)
    this.setState({roomName:e.target.value})
    this.setState({users:this.props.users})
    // console.log(this.state.roomName)
  }
  clickPrivate(e){
    e.preventDefault()
    this.setState({checkPrivate:!this.state.checkPrivate})

  }
  render(){
    return(
      <>
    <form style={{ justifyItems:"center"}}>
         <input
               type="text"
               id="roomName"
               placeholder="Enter room name here"
               onChange={this.handleChange}
               style={{width:'100%' , height:'40%' , fontSize:'16px' ,  }}
               
             />
              {/* <Switch
        checked={this.state.checkPrivate}
        onChange={this.clickPrivate}
        value="checked"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      /> */}
      <Fab 
      variant="extended"
      style={{background: 'linear-gradient(45deg, #589d62 30%, #B0D3BF 90%)', color:'white' , width:'100%' , fontWeight:'bold' , marginTop:'2px'}}
      onClick={this.createGroupChat}

      >Create group chat
      </Fab>
      </form>
      </>
    )
  }
}
