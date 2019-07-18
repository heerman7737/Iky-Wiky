import React from 'react'
import { Router , Route } from 'react-router-dom'
import Login from './pages/Login'
import './App.css'
import Profile from './pages/Profile'
import Session from './pages/Session'
import history from './utils/history'
const App = _ => {
  
  
  return(
    <Router history={history}>
      <div className="App">
        <Route exact path='/' component = { _ => <Login/> }/>
        <Route path='/Session' component = { _ => <Session/> } />
        <Route path='/Profile' component = { _ => <Profile/> } />
      </div>
    </Router>
  )
}

export default App 