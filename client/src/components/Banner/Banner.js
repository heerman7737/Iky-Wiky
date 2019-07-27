import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';



const Banner = props => {
    return (

            <AppBar position="static" id="AppBar">
                <Toolbar className="Tools">
               
                    <Typography variant="h4" className="Logo">
                        Blabble
                    </Typography>
             
                    <div className="toggle-container">
                        <div className="sun">☀</div>
                    <input type="checkbox" id="switch" name="theme" onClick={() => props.darkModeToggle(previousMode => !previousMode)} /><label id="switch" htmlFor="switch">Toggle</label>
                    <div className="moon">☾</div>
                    </div>
                </Toolbar>
    
            </AppBar>
       
    );
}

export default Banner;