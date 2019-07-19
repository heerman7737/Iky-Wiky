import React, { Component } from 'react'
import Nav from '../../components/Nav'
import Banner from '../../components/Banner'
import Chatkit from '@pusher/chatkit-client'
import MessageList from '../../components/SessionComp/MessageList'
import SendMessageForm from '../../components/SessionComp/SendMessageForm'

class Session extends Component {


  constructor(props) {
    super(props)
    this.state = {
        currentUser: null,
        currentRoom: null,
        messages: []
    }
    this.sendMessage = this.sendMessage.bind(this)
  }

  sendMessage(text) {
       this.state.currentUser.sendMessage({
         text,
         roomId: this.state.currentRoom.id,
       })
       console.log(this.state.currentUser)
       console.log(this.state.messages)
     }

  componentDidMount () {
    let userId= localStorage.getItem("userId")

    const chatManager = new Chatkit.ChatManager({
      instanceLocator: 'v1:us1:366d4bfd-9da9-4a3c-8b98-fb24d065efc5',
      userId,
      tokenProvider: new Chatkit.TokenProvider({
        url: 'http://localhost:3001/authenticate',
      }),
    })

    chatManager
      .connect()
      .then(currentUser => {
        this.setState({ currentUser })
        console.log(this.state.currentUser)
        return currentUser.subscribeToRoom({
            roomId: '20091913',
            messageLimit: 100,
            hooks: {
                onMessage: message => {
                console.log(message)
                this.setState({
                messages: [...this.state.messages, message],
            })
          },
        },
      })
      .then(console.log("Working"))

      
    })
          .then(currentRoom => {
                this.setState({ currentRoom })
                console.log(this.state.currentRoom)
               })
      .catch(error => console.error('error', error))
  }

  render() {
    const styles = {
      container: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
      },
      chatContainer: {
        display: 'flex',
        flex: 1,
      },
      whosOnlineListContainer: {
        width: '300px',
        flex: 'none',
        padding: 20,
        backgroundColor: '#2c303b',
        color: 'white',
      },
      chatListContainer: {
        padding: 20,
        width: '85%',
        display: 'flex',
        flexDirection: 'column',
      },
   }
   console.log(this.state)
    return (
        
      <div style={styles.container}>
        <div style={styles.chatContainer}>
          <aside style={styles.whosOnlineListContainer}>
            <h2>Who's online PLACEHOLDER</h2>
          </aside>
          <section style={styles.chatListContainer}>
          <MessageList
              messages={this.state.messages}
              style={styles.chatList}
            />     
             <SendMessageForm onSubmit={this.sendMessage} />
          </section>
        </div>
      </div>
    )
  }
}


export default Session

