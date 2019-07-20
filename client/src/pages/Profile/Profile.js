import React, { Component } from 'react'
import ProfileBanner from '../../components/ProfileBanner'
import Nav from '../../components/Nav'
import './Profile.css'
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Edit from '@material-ui/icons/Edit';
import Email from "@material-ui/icons/Email"
import Face from '@material-ui/icons/Face';
import Lock from '@material-ui/icons/Lock';
import Phone from '@material-ui/icons/Phone';
import TextField from '@material-ui/core/TextField';







class Profile extends Component {

    render() {
        return (
            <div>

                <ProfileBanner/>
                
        {/* Drop in profile update here */}

                <div className="profileContainer">
                    <h1>Profile</h1>
                    <Grid container justify="center" alignItems="center" className="Profile">
                        <Avatar alt="Remy Sharp" src="https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg" className="Profilepic"/>
                    </Grid>
                    <Grid container justify="center" alignItems="center" className="Name">
                        <h4>UserNameWhatEver</h4>
                    </Grid>
                    <br></br>
                    <Grid container justify="center" alignItems="center" className="UseName">
                        <Face/>
                        <h4>Name: </h4>
                        <TextField className="input-with-icon-grid" label="Type in Name" />
                    </Grid>
                    <Grid container justify="center" alignItems="center" className="EmailUpdate">
                        <Email/>
                        <h4>Email: </h4>
                        <TextField className="input-with-icon-grid" label="Email" />
                    </Grid>
                    <Grid container justify="center" alignItems="center" className="PhoneUpdate">
                        <Phone/>
                        <h4>Phone: </h4>
                        <TextField className="input-with-icon-grid" label="Phone Number" />
                    </Grid>
                    <Grid container justify="center" alignItems="center" className="PasswordUpdate">
                        <Lock/>
                        <h4>Password: </h4>
                        <TextField className="input-with-icon-grid" label="Password" /> 
                    </Grid>
                    <Grid container justify="center" alignItems="center" className="PasswordUpdate">
                        <Button variant="contained" color="secondary" className="CancelButt" >Cancel</Button>
                        <Button variant="contained" color="primary" className="SaveButt">Save</Button>
                    </Grid>        
                </div>
                <Nav/>
            </div>
        );
    }

}

export default Profile
