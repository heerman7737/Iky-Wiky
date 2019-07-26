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
                    <UserDrawer
                        currentUser={this.props.currentUser}
                        users={this.props.users}
                        rooms={this.props.rooms}
                    />
                    {this.props.currentRoom ?
                        <Typography variant="h4" className="Logo" >
                            {this.props.currentRoom.name}
                        </Typography> : <img style={{height:'40px'}} src="https://ui-ex.com/images/background-transparent-loading-3.gif" alt="loader"/>
                    }
                    <ChatsDrawer
                        currentUser={this.props.currentUser}
                        users={this.props.users}
                        rooms={this.props.rooms}
                        action={this.props.action}
                    />
                       
                        
                    </Toolbar>
        
                </AppBar>
           
        );
    }
}

export default SessionBanner;