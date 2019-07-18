import React, { Component } from 'react';
import Banner from '../../components/Banner'
import Nav from '../../components/Nav'
import News from '../../components/News'
import './NewsPage.css'

class NewsPage extends Component {
    render() {
        return (
            <div>
                <Banner/>
                <div className="cardContainer">
                <News/>
                </div>
                <Nav/>
            </div>
        );
    }
}

export default NewsPage;