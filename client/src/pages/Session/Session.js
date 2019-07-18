import React, { Component } from 'react'
import Nav from '../../components/Nav'
import Banner from '../../components/Banner'
import ChatSession from '../../components/SessionComp/ChatSession'
// import Room from '../../components/SessionComp/Room'
class Session extends Component {

    state = {
    }


    render() {
        return (
            <>
            <Banner/>
                <ChatSession/>
                <div>
                    <h1>Chatssss</h1>
                </div>
                {/* <Room/> */}
            <Nav/>
            </>
        )
    }
}

export default Session;