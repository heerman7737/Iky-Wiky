import React, { Component } from 'react';
import Banner from '../../components/Banner'
import Nav from '../../components/Nav'
import './Profile.css'
class Profile extends Component {
    render() {
        return (
            <div>
                <Banner/>
                
        {/* Drop in profile update here */}
                <div>
                    <h1>Profile</h1>
                </div>
                <Nav/>
            </div>
        );
    }
}

export default Profile;