import React from 'react'
import PropTypes from 'prop-types'
import chatUtils from '../../../utils/chatUtils.js'

class LoginModal extends React.Component {

  state = {
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    phone: "",
    avatar: "", //url from AWS
    objectId: ""
  }
  
  handlePullUserData = _ => {
    _.preventDefault()
    chatUtils.login()
    .then(console.log(data))
    // .then(({ data }) => this.setState({ 
    //   first_name: data.first_name,
    //   last_name: data.last_name,
    //   phone: data.phone,
    //   avatar: data.avatar,
    //   objectId: data.objectId
    // }))
    .then(console.log(this.state))
    .catch(error => console.log(error))
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
            <input id='username' placeholder='username' />
            <input id='password' placeholder='password' />
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
