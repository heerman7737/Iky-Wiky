import React from 'react'
import PropTypes from 'prop-types'
import chatUtils from '../../../utils/chatUtils.js'
import axios from 'axios'
import Chatkit from '@pusher/chatkit-client'

class LoginModal extends React.Component {

  state = {
    username: "",
    password: "",
  }
  
  handlePullUserData = e => {
    e.preventDefault()
    chatUtils.login(this.state.username,this.state.password)
    .then((data) =>{
      localStorage.setItem("userId",data.data[0]._id)
      localStorage.setItem("user_name",data.data[0].username)
    })
    .then(console.log("Working"))
    .catch(error => console.log(error))

    
    let userId= localStorage.getItem("userId")
    let user_name= localStorage.getItem("user_name")
    console.log('user '+userId)
    axios.post('http://localhost:3001/user',{userId,user_name})
    .then(()=>{
      console.log(userId,user_name)
      const tokenProvider = new Chatkit.TokenProvider({
        url: 'http://localhost:3001/authenticate',
      });
      const chatManager = new Chatkit.ChatManager({
        instanceLocator: 'v1:us1:366d4bfd-9da9-4a3c-8b98-fb24d065efc5',
        userId,
        tokenProvider
      });
      return chatManager.connect()
      .then(currentUser => {
        console.log('Successful connection', currentUser)
      })
      .catch(err => {
        console.log('Error on connection', err)
      })
    })
  }
  handleInputs = event => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  render () {
    // Render nothing if the "show" prop is false
    if (!this.props.show) {
      return null
    }

    // The gray background
    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50
    }

    // The modal "window"
    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 5,
      maxWidth: 500,
      minHeight: 300,
      margin: '0 auto',
      padding: 30
    }

    return (
      <div className='backdrop' style={{ backdropStyle }}>
        <div className='modal' style={{ modalStyle }}>
          {this.props.children}
          <form>
            <input onChange={this.handleInputs} id='username' placeholder='username' />
            <input onChange={this.handleInputs} id='password' placeholder='password' />
            <button onClick={this.handlePullUserData}>Submit</button>
          </form>
          <div className='footer'>
            <button onClick={this.props.onClose}>Close</button>
          </div>
        </div>
      </div>
    )
  }
}

LoginModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
}

export default LoginModal
