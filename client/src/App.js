import React from 'react'
import { Router, Route } from 'react-router-dom'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Session from './pages/Session'
import Home from './pages/Home'
import NewsPage from './pages/NewsPage'
import history from './utils/history'
import './App.css'
const App = _ => {
  const [darkMode, setDarkMode] = React.useState(getInitalMode())
  React.useEffect(() => {
    localStorage.setItem('dark', JSON.stringify(darkMode))
  }, [darkMode])

  //local storage for nightmode
  function getInitalMode() {
    const savedMode = JSON.parse(localStorage.getItem('dark'))
    return savedMode || false
  }

  return (
    <div className={darkMode ?  'light-mode' : 'dark-mode' }>
      <Router history={history}>
        <Route exact path='/' component={_ => <Login />} />
        <Route path='/Home' render={props => <Home darkModeToggle={setDarkMode} />} />
        <Route path='/Session' component={_ => <Session />} />
        <Route path='/News' component={_ => <NewsPage />} />
        <Route path='/Profile' component={_ => <Profile />} />
    </Router>
      </div>
  )
  }

export default App 