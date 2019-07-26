import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';






export default function ProfileBanner() {
 

        return (
            <AppBar position="static" id="AppBar">
                    <Toolbar className="Tools">
                   
                        <Typography variant="h4" className="Logo" >
                           Update Profile
                        </Typography>
                        
                    </Toolbar>
        
                </AppBar>
        );
    }