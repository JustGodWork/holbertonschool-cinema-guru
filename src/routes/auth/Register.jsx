import React from 'react'
import './auth.css'

export default function Register({ username, password, setUsername, setPassword }) {
  return (
    <div className="auth-form">
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <div className="auth-actions">
        <button type="submit">Sign Up</button>
      </div>
    </div>
  )
}
