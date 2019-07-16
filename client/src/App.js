import React from 'react'
import { BrowserRouter , Route } from 'react-router-dom'
import Login from './pages/Login'
import './App.css'
// import Session from './pages/Session'

const App = _ => {
  
  
  return(
    <BrowserRouter>
      <div className="App">
        <Route path='/Login' component = { _ => <Login/> }/>
        {/* <Route path='/Session' component = { _ => <Sessions/> } /> */}
        
      </div>
    </BrowserRouter>
  )
}

export default App 