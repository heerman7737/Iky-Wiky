import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';

// const options = [
//     'Logout',
// ];

class NewsBanner extends Component {
    render() {
        
        return (
    
             
                <AppBar position="static" id="AppBar">
                    <Toolbar className="Tools">
                   
                        <Typography variant="h4" className="Logo">
                            News
                        </Typography>
                        <div>
                        <IconButton
                        aria-label="More"
                        aria-controls="long-menu"
                        aria-haspopup="true"
                        // onClick={handleClick}
                        >
                        <MoreVertIcon />
                        </IconButton>
                        
                        </div>
                        
                        
                    </Toolbar>
        
                </AppBar>
           
        );
    }
}

export default NewsBanner;