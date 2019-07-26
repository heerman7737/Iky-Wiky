import React from 'react'
import chatUtils from '../../utils/chatUtils'
import './Login.scss'
import axios from 'axios'
import Chatkit from '@pusher/chatkit-client'
import history from '../../utils/history'
class LoginModal extends React.Component {

  state = {
    username: "",
    password: "",

  }
  
  handlePullUserData = e => {
    e.preventDefault()
    chatUtils.login(this.state.username,this.state.password)
    .then((data) =>{
      console.log(data)
      localStorage.setItem("userId",data.data[0]._id)
      localStorage.setItem("user_name",data.data[0].username)
      if(data.request.status===200){
        localStorage.setItem("Authenticate",true)
      }
      else{
        localStorage.setItem("Authenticate",false)
      }
    })
    .then(resp => {
      console.log("Working")
      let userId= localStorage.getItem("userId")
      let user_name= localStorage.getItem("user_name")
      console.log('user '+userId)
      axios.post('http://localhost:3001/user',{userId,user_name})
      //  .then(()=>{
         console.log(userId,user_name)
         const tokenProvider = new Chatkit.TokenProvider({
           url: 'http://localhost:3001/authenticate',
         });
         const chatManager = new Chatkit.ChatManager({
           instanceLocator: 'v1:us1:366d4bfd-9da9-4a3c-8b98-fb24d065efc5',
           userId,
           tokenProvider
         });
         chatManager.connect()
         .then(currentUser => {
           console.log('Successful connection', currentUser)
           history.push('/Session')
         })
         .catch(err => {
           console.log('Error on connection', err)
         })
         

    })
    .catch(error => console.log(error))


  //  })
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
              <input onChange={this.handleInputs} type='password' id='password' placeholder='password' />
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
