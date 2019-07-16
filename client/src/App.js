import React from 'react'
import { BrowserRouter , Route } from 'react-router-dom'
import Login from './pages/Login'
import './App.css'
import Profile from './pages/Profile'
import Session from './pages/Session'

const App = _ => {
  
  
  return(
    <BrowserRouter>
      <div className="App">
        <Route exact path='/' component = { _ => <Login/> }/>
        <Route path='/Session' component = { _ => <Session/> } />
        <Route path='/Profile' component = { _ => <Profile/> } />
      </div>
    </BrowserRouter>
  )
}

export default App 