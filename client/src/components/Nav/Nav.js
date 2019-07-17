import React, { Component } from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import BookIcon from '@material-ui/icons/Book';
import HomeIcon from '@material-ui/icons/Home';
import ChatIcon from '@material-ui/icons/Chat';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


class Nav extends Component {
    render() {
        return (
            <BottomNavigation className="nav" fixed >
                
                <BottomNavigationAction label="chat"  icon={<HomeIcon />} />
                <BottomNavigationAction label="chat"  icon={<ChatIcon />} />
                <BottomNavigationAction label="list"  icon={<BookIcon />} />
                <BottomNavigationAction label="account" icon={<AccountCircleIcon />} />
                
            </BottomNavigation>
        );
    }
}

export default Nav;
