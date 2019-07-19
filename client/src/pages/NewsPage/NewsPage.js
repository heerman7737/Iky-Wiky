import React, { Component } from 'react';
import NewsBanner from '../../components/NewsBanner'
import Nav from '../../components/Nav'
import News from '../../components/News'
import './NewsPage.css'

class NewsPage extends Component {
    render() {
        return (
            <div>
                <NewsBanner/>
                <div className="cardContainer">
                <News/>
                </div>
                <Nav/>
            </div>
        );
    }
}

export default NewsPage;