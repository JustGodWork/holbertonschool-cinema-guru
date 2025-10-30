import React, { useState } from 'react'
import './auth.css'

import Login from './Login'
import Register from './Register'

export default function Authentication({ setIsLoggedIn, setUserUsername }) {
  const [_switchBoolean, _setSwitchBoolean] = useState(true)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="auth-container">
      <div className="auth-header">
        <button
          type="button"
          className={`auth-toggle-btn ${_switchBoolean ? 'active' : ''}`}
          onClick={() => _setSwitchBoolean(true)}
        >
          Sign In
        </button>

        <button
          type="button"
          className={`auth-toggle-btn ${!_switchBoolean ? 'active' : ''}`}
          onClick={() => _setSwitchBoolean(false)}
        >
          Sign Up
        </button>
      </div>

      <div>
        {_switchBoolean ? (
          <Login
            username={username}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
            setIsLoggedIn={setIsLoggedIn}
            setUserUsername={setUserUsername}
          />
        ) : (
          <Register
            username={username}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
            setIsLoggedIn={setIsLoggedIn}
            setUserUsername={setUserUsername}
          />
        )}
      </div>
    </div>
  )
}
