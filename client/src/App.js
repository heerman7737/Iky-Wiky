import React from 'react'
import Login from './pages/Login'
import Session from './pages/Session'

function App () {
  return (
    <div className='App'>
      <Login exact path='/login' component={_ => <Login />} />
      {/* <Session exact path='/Session' component={_ => <Session />} /> */}
    </div>
  )
}

export default App
