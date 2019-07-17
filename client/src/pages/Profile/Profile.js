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
                
                <Nav/>
            </div>
        );
    }
}

export default Profile;