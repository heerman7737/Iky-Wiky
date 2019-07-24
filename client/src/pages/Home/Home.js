import React, { Component } from 'react';
import Banner from '../../components/Banner'
import Nav from '../../components/Nav'
import Welcome from '../../components/WelcomeContainer'
import './Home.css'
import '../../App.css'

class Home extends Component {
    render() {
        return (
            <div>
               
               <Banner darkModeToggle={this.props.darkModeToggle}/>
                {/* <div className="cardContainer"> */}
                 <Welcome/>
                {/* </div> */}
               
                <Nav/>

            </div>
        
        );
    }
}

export default Home;