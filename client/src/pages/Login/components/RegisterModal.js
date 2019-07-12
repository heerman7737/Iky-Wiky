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
    _.preventDefault()
    console.log(this.state)
    chatUtils.addUser(this.state)
    // .then(({ data }) => this.setState({
    //   first_name: this.first_name,
    //   last_name: this.last_name,
    //   phone: this.phone,
    //   avatar: this.avatar, 
    //   username: this.username,
    //   password: this.password }))
    // .catch(error => console.log(error))
  }

  handleInputs = event => {
    this.setState({
      [event.target.id]: event.target.value
    })
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
          <input onChange={this.handleInputs} id="first_name" placeholder="First Name"/>
          <input onChange={this.handleInputs} id="last_name" placeholder="Last Name"/>
          <input onChange={this.handleInputs} id="username" placeholder="Username"/>
          <input onChange={this.handleInputs} id="password" placeholder="Password"/>
          <input onChange={this.handleInputs} id="phone" placeholder="Phone Number"/>
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