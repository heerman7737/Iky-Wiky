import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './Banner.css'


const Banner = props => {
    return (

            <AppBar position="static" id="AppBar">
                <Toolbar className="Tools">
               
                    <Typography variant="h4" className="Logo">
                        Babble
                    </Typography>
             
                    <div className="toggle-container">
                        <div class="sun">☀</div>
                    <input type="checkbox" id="switch" name="theme" onClick={() => props.darkModeToggle(previousMode => !previousMode)} /><label id="switch" htmlFor="switch">Toggle</label>
                    <div class="moon">☾</div>
                    </div>
                </Toolbar>
    
            </AppBar>
       
    );
}

export default Banner;