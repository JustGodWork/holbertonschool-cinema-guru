import React from 'react'
import './auth.css'

export default function Login({
  username,
  password,
  setUsername,
  setPassword,
  setIsLoggedIn,
  setUserUsername,
}) {
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      })

      if (!res.ok) return

      const data = await res.json()
      if (data && data.accessToken) {
        localStorage.setItem('accessToken', data.accessToken)
        setIsLoggedIn?.(true)
        if (data.username) setUserUsername?.(data.username)
      }
    } catch {
      // ignore
    }
  }

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
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
        <button type="submit">Sign In</button>
      </div>
    </form>
  )
}
