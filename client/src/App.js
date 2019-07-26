import React from 'react'
import { Router, Route, Redirect } from 'react-router-dom'
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
        <ProtectedRoute path='/Home' component={props => <Home darkModeToggle={setDarkMode} />} />
        <ProtectedRoute path='/Session' component={_ => <Session />} />
        <ProtectedRoute path='/News' component={_ => <NewsPage />} />
        <ProtectedRoute path='/Profile' component={_ => <Profile />} />
    </Router>
      </div>
  )
  }
  class ProtectedRoute extends React.Component {
    render () {
      const { component: Component, ...props } = this.props
      return (
        <Route
          {...props}
          render={props => (
            localStorage.getItem('Authenticate') !== 'false' ?
              <Component {...props} />
              : <Redirect to='/' />
          )}
        />
      )
    }
  }
export default App 