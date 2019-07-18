import React, { Component } from 'react'
import ChatSession from '../../components/SessionComp/ChatSession'
import Chatkit from '@pusher/chatkit-client'
// import Room from '../../components/SessionComp/Room'
class Session extends Component {

    state = {
        currentUser:{},
        currentRoom:{},
        message:[]
    }
componentDidMount(){
    let userId=localStorage.getItem("userId")
    const tokenProvider = new Chatkit.TokenProvider({
        url: 'http://localhost:3001/authenticate',
      });
      const chatManager = new Chatkit.ChatManager({
        instanceLocator: 'v1:us1:366d4bfd-9da9-4a3c-8b98-fb24d065efc5',
        userId,
        tokenProvider
      });
      chatManager.connect()
      .then(currentUser=>{
        currentUser.sendSimpleMessage({
            roomId: '20091598',
            text: "Bye bYe",
          })
          .then(messageId => {
            console.log(`Added message to ${messageId}`)
          })
          .catch(err => {
            console.log(`Error adding message to ${err}`)
          })
      })
}
handleInputs = event => {
    this.setState({
      [event.target.id]: event.target.value
    })
 }
    render() {
        return (
            <>
                <ChatSession/>
            </>
        )
    }
}

export default Session