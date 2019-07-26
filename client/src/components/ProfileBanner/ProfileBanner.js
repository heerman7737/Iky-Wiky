import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';





export default function ProfileBanner() {
 

        return (
            <AppBar position="static" id="AppBar">
                    <Toolbar className="Tools">
                   
                        <Typography variant="h4" className="Logo" >
                           Update Profile
                        </Typography>
                        <div>
                        <IconButton style={{color:'white'}}>
                        <ExitToAppIcon/>
                        </IconButton>
                         
        
                               
                           
                        </div>
                        
                    </Toolbar>
        
                </AppBar>
        );
    }