import React, { Component } from 'react';
import Banner from '../../components/Banner'
import Nav from '../../components/Nav'
import Welcome from '../../components/WelcomeContainer'
import './Home.css'


class Home extends Component {
    render() {
        return (
            <div>
               
                <Banner/>
                {/* <div className="cardContainer"> */}
                 <Welcome/>
                {/* </div> */}
               
                <Nav/>

            </div>
        
        );
    }
}

export default Home;