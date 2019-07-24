import React from 'react';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import RoomList from './RoomList'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';


const drawerWidth = '100%';


const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  btn: {
    background: 'linear-gradient(45deg, #589d62 30%, #B0D3BF 90%)',
    border: 0,
    borderRadius: 3,
    color: 'white',
    height: 48,
    padding: '0 30px',
    margin:'10px',
    // marginBottom:'5px'
  },

}));

export default function ChatsDrawer(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  function createGroupChat(e){
    e.preventDefault()
    props.currentUser.createRoom({
      name:"BabyOneMoreTime",
      private:false,
      addUserIds:['admin','Baby']
    })
  }
  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  return (
    <div >
      
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
        <Typography variant="h5" style={{textAlign: "center",fontFamily:'Leckerli One',color:'#b0d3bf',fontSize: '2.5rem'}}>
          Chat Rooms
      </Typography>
      <Divider />
  
            <RoomList
              currentUser={props.currentUser}
              rooms={props.rooms}
              action={props.action}
            />

         <Divider/>
      <Fab 
      variant="extended"
      size="medium"
      color="primary"
      onClick={createGroupChat}
      className={classes.btn}
      >Create group chat
      </Fab>
      </Drawer>
    </div>
  );
}

