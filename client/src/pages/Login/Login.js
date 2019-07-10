import React, { Component } from 'react'
import chatUtils from '../../utils/chatUtils.js'

class Login extends Component {

    state = {
        verges: []
    }


    render() {
        return (
            <>
                <nav>
                    <button>Login</button>
                    <button>Register</button>
                </nav>

            </>
        )
    }
}

export default Login