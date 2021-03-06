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
               
                    <h1 className="header1">Welcome {`${this.state.username}`}</h1>
                    
                </Grid>
                <Grid container justify="center" alignItems="center">
               
                    <Avatar alt="Remy Sharp" src="https://cdn2.vectorstock.com/i/1000x1000/14/11/round-avatar-icon-symbol-character-image-vector-16831411.jpg" className="Avatar"/>
                </Grid>
                <Grid container justify="center" alignItems="center">
                    <div className="welMsg">
                    <p className="p">Thank you for joining Blabble! The only place to blab about and report fake news.     </p>
                    <h3 className="h3">(Please Fake News Responsibly)</h3>
                    
                    </div>
                </Grid>

                </div>
              
                
            </>
        );
    }
}

export default Welcome;