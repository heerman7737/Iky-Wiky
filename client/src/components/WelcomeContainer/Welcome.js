import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';





class Welcome extends Component {
    state={
        username:localStorage.getItem("user_name")
    }
    render() {
        
        return (
            <>
                <div className='welcome'>
                <Grid container justify="center" alignItems="center"  >
               
                    <h1 className="header">Welcome {`${this.state.username}`}</h1>
                    
                </Grid>
                <Grid container justify="center" alignItems="center">
               
                    <Avatar alt="Remy Sharp" src="https://cdn2.vectorstock.com/i/1000x1000/14/11/round-avatar-icon-symbol-character-image-vector-16831411.jpg" className="Avatar"/>
                </Grid>
                <Grid container justify="center" alignItems="center">
              
                </Grid>

                </div>
              
                
            </>
        );
    }
}

export default Welcome;