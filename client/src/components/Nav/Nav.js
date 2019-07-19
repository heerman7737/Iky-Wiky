import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import BookIcon from '@material-ui/icons/Book';
import HomeIcon from '@material-ui/icons/Home';
import ChatIcon from '@material-ui/icons/Chat';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

// class Nav extends Component {
//     render() {
//         return (
//             <BottomNavigation className="nav" fixed >
                
//                 <Link label="chat" to="/" />
//                 <BottomNavigationAction label="chat"  value=""icon={<ChatIcon />} />
//                 <BottomNavigationAction label="list"  icon={<BookIcon />} />
//                 <Link label="account" to="Profile" icon={<AccountCircleIcon />} />

//             </BottomNavigation>
//         );
//     }
// }

// export default Nav;

class Nav extends Component {
    state = {
      value: 0,
      pathMap: [
       
        '/Home',
        '/Session',
        '/News',
        '/Profile',
        
      ]
    };
  
    componentWillReceiveProps(newProps) {
      const {pathname} = newProps.location;
      const {pathMap} = this.state;
  
      const value = pathMap.indexOf(pathname);
  
      if (value > -1) {
        this.setState({
          value
        });
      }
    }
  
    handleChange = (event, value) => {
      this.setState({ value });
    };
  
    render() {
      const {value, pathMap} = this.state;
  
      return (
        <BottomNavigation
          value={value}
          onChange={this.handleChange}
          showLabels
          className="nav primary"
        >
          <BottomNavigationAction label="Home" icon={<HomeIcon />} component={Link} to={pathMap[0]} />
          <BottomNavigationAction label="Chat" icon={<ChatIcon />} component={Link} to={pathMap[1]} />
          <BottomNavigationAction label="News" icon={<BookIcon />} component={Link} to={pathMap[2]} />
          <BottomNavigationAction label="Profile" icon={<AccountCircleIcon />} component={Link} to={pathMap[3]} />
          
        </BottomNavigation>
      );
    }
  }
  
  export default withRouter(Nav);