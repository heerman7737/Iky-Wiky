import React, { Component } from 'react';
import LoginModal from '../../components/LoginModal';
import RegisterModal from '../../components/RegisterModal';
import ConnectToChatkit from '../../utils/apiUtils'
import './Main.scss'
class Login extends Component {
  constructor(props) {
      super(props);
      this.state = {
        isLogginActive: true
      };
    }
  
    componentDidMount() {
      //Add .right by default
      this.rightSide.classList.add("right");
    }
  
    changeState() {
      const { isLogginActive } = this.state;
  
      if (isLogginActive) {
        this.rightSide.classList.remove("right");
        this.rightSide.classList.add("left");
      } else {
        this.rightSide.classList.remove("left");
        this.rightSide.classList.add("right");
      }
      this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));
    }

    clearlocalStorage=()=>{
  localStorage.clear()  
}
  
    render() {
      const { isLogginActive } = this.state;
      const current = isLogginActive ? "Register" : "Login";
      const currentActive = isLogginActive ? "login" : "register";
      return (
        <div className="App">
          <div className="login">
            <div className="container" ref={ref => (this.container = ref)}>
              {isLogginActive && (
                <LoginModal containerRef={ref => (this.current = ref)} 
                onClose={this.toggleModal}
                connection={ConnectToChatkit}/>
              )}
              {!isLogginActive && (
                <RegisterModal containerRef={ref => (this.current = ref)} 
                onClose={this.toggleModal}
                connection={ConnectToChatkit}/>
              )}
            </div>
            <RightSide
              current={current}
              currentActive={currentActive}
              containerRef={ref => (this.rightSide = ref)}
              onClick={this.changeState.bind(this)}
            />
          </div>
        </div>
      );
    }
  }
  
  const RightSide = props => {
    return (
      <div
        className="right-side"
        ref={props.containerRef}
        onClick={props.onClick}
      >
        <div className="inner-container">
          <div className="text">{props.current}</div>
        </div>
      </div>
    );
  };
  


export default Login;
//--------------------------------------------------------///
//Not sure where you want this clear button located????//

/* <button onClick={this.clearlocalStorage}>Clear</button> */

//--------------------------------------------------------///

