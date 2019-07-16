import React from 'react'
import chatUtils from '../utils/chatUtils.js'
import './Login.scss'
class LoginModal extends React.Component {

  state = {
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    phone: "",
    avatar: "", //url from AWS
    _id: ""
  }
  
  handlePullUserData = _ => {
    _.preventDefault()
    chatUtils.login(this.state.username,this.state.password)
    .then((data) =>{
      console.log(data)
      localStorage.setItem("userId",data.data[0]._id)})
    .then(console.log("Working"))
    .catch(error => console.log(error))
  }
  handleInputs = event => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  render () {

    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Blabble</div>
        <div className="content">
        {this.props.children}
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input onChange={this.handleInputs} id='username' placeholder='username'  />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input onChange={this.handleInputs} id='password' placeholder='password' />
            </div>
          </div>
        </div>
        <div className="footer">
          <button onClick={this.handlePullUserData} className="btn">
            Login
          </button>

        </div>
      </div>
    )
  }
}



export default LoginModal
