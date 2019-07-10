import React, { Component } from 'react';
import LoginModal from './components/LoginModal';
import RegisterModal from './components/RegisterModal'
import axios from 'axios'
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = { 
        isLoginOpen: false,
        isRegisterOpen:true
     };
  }

  toggleModal = () => {
    this.setState({
        isLoginOpen: !this.state.isLoginOpen,
        isRegisterOpen: !this.state.isRegisterOpen,
    });
  }
  
  connectToChatkit=(event)=>{
      event.preventDefault()
      axios.post('http://localhost:3002/users', { userUID })
    .then(() => {
      const tokenProvider = new Chatkit.TokenProvider({
        url: 'http://localhost:3002/authenticate',
      });

      const chatManager = new Chatkit.ChatManager({
        instanceLocator: 'v1:us1:366d4bfd-9da9-4a3c-8b98-fb24d065efc5',
        userUId,
        tokenProvider,
      });

      return chatManager
        .connect({
          onAddedToRoom: room => {
            const { rooms } = this.state;
            this.setState({
              rooms: [...rooms, room],
            });
          },
        })
        .then(currentUser => {
          this.setState(
            {
              currentUser,
              showLogin: false,
              isLoading: false,
              rooms: currentUser.rooms,
            },
            () => connectToRoom.call(this)
          );
        });
    })
    .catch(console.error);
}

  
  render() {
    return (
      <div className="App">
        <button onClick={this.toggleModal}>
         Login
        </button>

        <LoginModal show={this.state.isLoginOpen}
          onClose={this.toggleModal}>
        </LoginModal>
        <button onClick={this.toggleModal}>
         Register
        </button>
        <RegisterModal show={this.state.isRegisterOpen}
          onClose={this.toggleModal}>
        </RegisterModal>
      </div>
    );
  }
}

export default Login;