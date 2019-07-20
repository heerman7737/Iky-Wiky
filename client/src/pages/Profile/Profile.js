import React, { Component } from 'react'
import ProfileBanner from '../../components/ProfileBanner'
import Nav from '../../components/Nav'
import './Profile.css'
class Profile extends Component {
  render () {
    return (
      <div>
        <ProfileBanner />

        {/* Drop in profile update here */}
        <div className='profileContainer'>
          <h1>Profile</h1>
        </div>
        <Nav />
      </div>
    )
  }
}

export default Profile
