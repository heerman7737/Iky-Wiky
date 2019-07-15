import React, { Component } from 'react';
import LoginModal from './components/LoginModal';
import RegisterModal from './components/RegisterModal'
import ConnectToChatkit from '../../utils/apiUtils'
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
  clearlocalStorage=()=>{
    localStorage.clear()  
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.toggleModal}>
         Login
        </button>

        <LoginModal show={this.state.isLoginOpen}
          onClose={this.toggleModal}
          connection={ConnectToChatkit}>
        </LoginModal>
        <button onClick={this.toggleModal}>
         Register
        </button>
        <RegisterModal show={this.state.isRegisterOpen}
          onClose={this.toggleModal}
          connection={ConnectToChatkit}>
        </RegisterModal>
        <button onClick={this.clearlocalStorage}>Clear</button>
      </div>
    );
  }
}

export default Login;