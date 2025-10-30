import React, { useEffect, useState } from 'react'
import './App.css'
import Dashboard from './components/Dashboard'
import Authentication from './components/Authentication'

export default function App() {
  const [isLoggedInBoolean, setIsLoggedInBoolean] = useState(false)
  const [userUsernamestring, setUserUsernamestring] = useState('')

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('accessToken')
        if (!token) return

        const res = await fetch('/api/auth/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })

        if (!res.ok) return

        const data = await res.json()
        // Expecting the response to contain a username field
        if (data) {
          setIsLoggedInBoolean(true)
          if (data.username) setUserUsernamestring(data.username)
        }
      } catch {
        // silent failure – stay logged out
      }
    }

    checkAuth()
  }, [])

  return (
    <div className="App">
      {isLoggedInBoolean ? (
        <Dashboard username={userUsernamestring} />
      ) : (
        <Authentication />
      )}
    </div>
  )
}
