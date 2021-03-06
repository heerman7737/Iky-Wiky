import React, { Component } from 'react'
import ProfileBanner from '../../components/ProfileBanner'
import Nav from '../../components/Nav'
import './Profile.css'
import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Email from '@material-ui/icons/Email'
import Face from '@material-ui/icons/Face'
import Lock from '@material-ui/icons/Lock'
import Phone from '@material-ui/icons/Phone'
import TextField from '@material-ui/core/TextField'
import chatUtils from '../../utils/chatUtils.js'
import axios from 'axios'
import Chatkit from '@pusher/chatkit-client'
import InputAdornment from '@material-ui/core/InputAdornment';
import history from '../../utils/history'
import ReactFilestack from 'filestack-react'

class Profile extends Component {

    state = {
        // first_name: "",
        // last_name: "",
        // phone: "",
        avatar: "", //url from AWS
        // username: "",
        // password: "",
        currentUser: null,
        // userId: ""
    }
    // componentWillMount(){
    //   let userId=localStorage.getItem("userId")
    //   const tokenProvider = new Chatkit.TokenProvider({
    //     url: 'http://localhost:3001/authenticate',
    // });
    // const chatManager = new Chatkit.ChatManager({
    //     instanceLocator: 'v1:us1:366d4bfd-9da9-4a3c-8b98-fb24d065efc5',
    //     userId,
    //     tokenProvider
    // });
    // // chatManager.connect()
    // //     .then(currentUser => {
    // //         this.setState({
    // //             currentUser
    // //         })}
    // }
    handleUpdateUser = e => {
        e.preventDefault()
        console.log(this.state)
        localStorage.setItem("avatar",this.state.avatar)
        let userId = localStorage.getItem("userId")
        let user_name = localStorage.getItem("user_name")
        let avatar=localStorage.getItem("avatar")
        axios.put('http://localhost:3001/updateUser',{userId,user_name,avatar})

        // chatUtils.updateUser(this.state.id, {
        //   first_name: this.state.first_name,
        //   last_name: this.state.last_name,
        //   phone: this.state.phone,
        //   avatar: this.state.avatar,
        //   username: this.state.username,
        //   password: this.state.password
        // })
        //     .then(chatUtils.login(this.state.username, this.state.password)
        //         .then((data) => {
        //             localStorage.setItem("userId", data.data[0]._id)
        //             localStorage.setItem("user_name", data.data[0].username)
        //         })
        //         .then(() => {
        //             let userId = localStorage.getItem("userId")
        //             let user_name = localStorage.getItem("user_name")
        //             console.log('user ' + userId)
        //             axios.put('http://localhost:3001/updateUser',{})
        //             // .then(()=>{
        //             console.log(userId, user_name)
        //             const tokenProvider = new Chatkit.TokenProvider({
        //                 url: 'http://localhost:3001/authenticate',
        //             });
        //             const chatManager = new Chatkit.ChatManager({
        //                 instanceLocator: 'v1:us1:366d4bfd-9da9-4a3c-8b98-fb24d065efc5',
        //                 userId,
        //                 tokenProvider
        //             });
        //             chatManager.connect()
        //                 .then(currentUser => {
        //                     this.setState({
        //                         currentUser
        //                     })
        //                     console.log(this.state.currentUser)
        //                     console.log('Successful connection')
        //                     currentUser.joinRoom({ roomId: '20091913' })
        //                         .then(room => {
        //                             console.log(`Joined room with ID: ${room.id}`)
        //                         })
        //                         .catch(err => {
        //                             console.log(`Error joining room ${20091913}: ${err}`)
        //                         })
        //                 })

        //                 .catch(err => {
        //                     console.log('Error on connection', err)
        //                 })
        //             // history.push('/Session')
        //             // })
        //         })
        //     )


    }
    componentDidMount(){


      // this.setState({ // I need help on this part
      //   userId: localStorage.getItem("userId")
      // })
      // chatUtils.userInfo(user, info => {
      //   console.log(info)
      // })

      let userId = localStorage.getItem("userId")
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
      this.setState({
          currentUser
      })
    })}
    handleInputs = event => {
      this.setState({
        [event.target.name]: event.target.value
      })
    }

    clearlocalStorage=()=>{
      console.log(this.state.currentUser)
      this.state.currentUser.disconnect()
      localStorage.clear()  
      history.push('/')
  
    }
    successHandler=(result)=>{
      if(result.filesFailed.length) {
        alert("Image failed to upload. Try again.")
      }
      else {
        console.log(result.filesUploaded[0].url)      
        this.setState({
          avatar: result.filesUploaded[0].url
        })
      }
    }
  render () {
    return (
      <div>

        <ProfileBanner />

        {/* Drop in profile update here */}

        <div className='profileContainer' >
          
          <Grid container justify='center' alignItems='center' className='Profile' >
          <Avatar alt='Remy Sharp' src={this.state.avatar} className='Profilepic' />
          </Grid>
          <Grid container justify='center' alignItems='center' className='Profile' >

          <ReactFilestack
            apikey="AUJn7r4EcQC6XBAhaYWpZz"
            customRender={({ onPick }) => (
            <div>
              <button onClick={onPick}>Update Photo</button>
            </div>
            )}
            onSuccess={this.successHandler}
          />
</Grid>
          {/* <Grid container justify='center' alignItems='center' className='Name'>
      
          </Grid>
          <br />
          <Grid container justify='center' alignItems='center' className='UseName'>
           
            
            <TextField onChange={this.handleInputs} name='first_name' id='input-with-icon-grid' label='First Name' InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Face className="profileIcons"/>
                  </InputAdornment>
                ),
              }}/>
            
          </Grid>
          <Grid container justify='center' alignItems='center' >
          <TextField onChange={this.handleInputs} name='last_name' id='input-with-icon-grid' label='Last Name'InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Face className="profileIcons"/>
                  </InputAdornment>
                ),
              }} />
          </Grid>
          <Grid container justify='center' alignItems='center' className='EmailUpdate'>
          
            
            <TextField onChange={this.handleInputs} name='email' id='input-with-icon-grid email' label='Email' InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email className="profileIcons"/>
                  </InputAdornment>
                ),
              }}/>
          </Grid>
          <Grid container justify='center' alignItems='center' className='PhoneUpdate'>
            
            <TextField onChange={this.handleInputs} name='phone' id='input-with-icon-grid phone' label='Phone Number' InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Phone className="profileIcons"/>
                    
                  </InputAdornment>
                ),
              }}/>
          </Grid>
          <Grid container justify='center' alignItems='center' className='PasswordUpdate'>
          
            <TextField onChange={this.handleInputs} style={{color:'white'}} name='password' id='input-with-icon-grid password' label='Password' InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock className="profileIcons"/>
                  </InputAdornment>
                ),
              }}/>

          </Grid> */}
          <Grid container justify='center' alignItems='center' className='Update'>
            <Button variant="outlined" color="inherit" className='SaveButt' onClick={this.handleUpdateUser}>Update</Button>
            <Button variant="outlined" color="secondary" className='CancelButt'>Cancel</Button>
          </Grid>
          <Grid container justify='center' alignItems='center' className='Update'>
            <Button variant="contained" color="secondary" onClick={this.clearlocalStorage}>Logout</Button> 
          </Grid>

        </div>
        <Nav />
      </div>
    )
  }
}

export default Profile
