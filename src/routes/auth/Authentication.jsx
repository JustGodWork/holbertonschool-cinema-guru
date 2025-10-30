import React, { useState } from 'react'
import './auth.css'

import Login from './Login'
import Register from './Register'
import axios from 'axios'

export default function Authentication({ setIsLoggedIn, setUserUsername }) {
  const [_switchBoolean, _setSwitchBoolean] = useState(true)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const route = _switchBoolean ? '/api/auth/login' : '/api/auth/register'
      const res = await axios.post(route, { username, password })

      const data = res?.data
      if (data && data.accessToken) {
        localStorage.setItem('accessToken', data.accessToken)
        setUserUsername?.(username)
        setIsLoggedIn?.(true)
      }
    } catch {
      // ignore errors for now
    }
  }

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

      <form onSubmit={handleSubmit}>
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
      </form>
    </div>
  )
}
