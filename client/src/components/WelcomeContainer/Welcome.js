import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';





class Welcome extends Component {
    
    render() {
        
        return (
            <>
                
                <Grid container justify="center" alignItems="center" className="welcome">
                    <h1 className="intro">Welcome Username</h1>

                {/* dynamically add username and avatar */}
                
                        <Avatar alt="Remy Sharp" src="https://cdn2.vectorstock.com/i/1000x1000/14/11/round-avatar-icon-symbol-character-image-vector-16831411.jpg" className="Avatar"/>
                </Grid>
 
                   
               
            </>
        );
    }
}

export default Welcome;