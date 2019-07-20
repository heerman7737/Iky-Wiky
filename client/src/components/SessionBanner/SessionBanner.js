import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import  UserDrawer from '../SessionComp/UsersDrawer';
import ChatsDrawer from '../SessionComp/ChatsDrawer';




class SessionBanner extends Component {
    render() {
        
        return (
    
             
                <AppBar position="static" >
                    <Toolbar className="Tools">
                    <UserDrawer/>
                        <Typography variant="h4" className="Logo">
                            Chats
                        </Typography>
                    <ChatsDrawer/>
                       
                        
                    </Toolbar>
        
                </AppBar>
           
        );
    }
}

export default SessionBanner;