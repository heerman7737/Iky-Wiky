import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class NewsBanner extends Component {
    render() {
        
        return (
    
             
                <AppBar position="static" id="AppBar">
                    <Toolbar className="Tools">
                   
                        <Typography variant="h4" className="Logo">
                            News
                        </Typography>
                       
                    </Toolbar>
        
                </AppBar>
           
        );
    }
}

export default NewsBanner;