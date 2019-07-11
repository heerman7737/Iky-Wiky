import React from 'react';
import PropTypes from 'prop-types';
import chatUtils from '../../../utils/chatUtils.js'

class RegisterModal extends React.Component {

  state = {
    first_name: "",
    last_name: "",
    phone: "",
    avatar: "", //url from AWS
    username: "",
    password: ""
  }

  handleAddUser = _ => {
    chatUtils.addUser()
    .then(({ data }) => this.setState({
      first_name: this.first_name,
      last_name: this.last_name,
      phone: this.phone,
      avatar: this.avatar, 
      username: this.username,
      password: this.password }))
    .catch(error => console.log(error))
  }

  handleInputs = event => {
    addEventListener.onKeyDown(event.target.value = this.setState(event.target.id))
    .then(_ => sendStatus(200))
    .catch(error => console.log(error))
  }

  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
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
    };

    // The modal "window"
    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 5,
      maxWidth: 500,
      minHeight: 300,
      margin: '0 auto',
      padding: 30
    };



    return (
      <div className="backdrop" style={{backdropStyle}}>
        <div className="modal" style={{modalStyle}}>
          {this.props.children}
          <form> 
          <input onKeyDown={handleInputs} id="first_name" placeholder="First Name"/>
        <input onKeyDown={handleInputs} id="last_name" placeholder="Last Name"/>
        <input onKeyDown={handleInputs} id="username" placeholder="Username"/>
        <input onKeyDown={handleInputs} id="password" placeholder="Password"/>
        <input onKeyDown={handleInputs} id="phone" placeholder="Phone Number"/>
        <button onClick={this.handleAddUser}>Submit</button>
        </form>
          <div className="footer">
            <button onClick={this.props.onClose}>Close</button>
          </div>
        </div>
      </div>
    );
  }
}

RegisterModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default RegisterModal;