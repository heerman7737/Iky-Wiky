import React, { Component } from 'react';
import Banner from '../../components/Banner'
import Nav from '../../components/Nav'
import './Profile.css'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

class Profile extends Component {

    state = {
        name: "",
        lastname: "",
        username: "",
        password: "",
        email: "",

    }

    handleSubmit = () => {
        console.log(this.state)
    }

    handleChange = (event) => {
        let newInputValue = event.target.value
        let stateKey = event.target.id
        this.setState({ [stateKey]: newInputValue })

    }

    render() {
        return (
            <div>
                <Banner/>
                
        {/* Drop in profile update here */}
                <div>
                    <h1>Profile</h1>
                </div>
                <Nav/>
                <div>
                    <TextField
                        id="name"
                        label="Name"
                        className=""
                        value={this.state.name}
                        onChange={this.handleChange}
                        margin="normal"
                    />
                     <TextField
                        id="lastname"
                        label="Last Name"
                        className=""
                        value={this.state.lastname}
                        onChange={this.handleChange}
                        margin="normal"
                    />
                    <TextField
                        id="username"
                        label="Username"
                        className=""
                        value={this.state.username}
                        onChange={this.handleChange}
                        margin="normal"
                    />
                    <TextField
                        id="password"
                        label="Password"
                        className=""
                        value={this.state.password}
                        onChange={this.handleChange}
                        margin="normal"
                    />
                    <TextField
                        id="email"
                        label="E-Mail"
                        className=""
                        value={this.state.email}
                        onChange={this.handleChange}
                        margin="normal"
                    />
                    <button onClick={this.handleSubmit}>Submit</button>
                </div>
            </div>
        );
    }
}

export default Profile;