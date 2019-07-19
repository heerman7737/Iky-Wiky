import React from 'react'
import { Router , Route } from 'react-router-dom'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Session from './pages/Session'
import Home from './pages/Home'
import NewsPage from './pages/NewsPage'
import history from './utils/history'

const App = _ => {
  const [darkMode , setDarkMode] = React.useState(false)
  
  return(

    <Router history={history}>
      <div  className={darkMode ? "dark-mode" : "light-mode"}>

        <Route exact path='/' component = { _ => <Login/> }/>
        <Route path='/Home' component = { _ => <Home/> }/>
        <Route path='/Session' component = { _ => <Session/> } />
        <Route path='/News' component = { _ => <NewsPage/> } />
        <Route path='/Profile' component = { _ => <Profile/> } />
      </div>
    </Router>
  )
}

export default App 