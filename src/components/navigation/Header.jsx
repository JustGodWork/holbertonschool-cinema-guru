import React from 'react'
import './navigation.css'

export default function Header({ userUsername, setIsLoggedIn }) {
  const logout = () => {
    localStorage.removeItem('accessToken')
    setIsLoggedIn?.(false)
  }

  return (
    <nav className="cg-nav">
      <div className="cg-nav-left">
        <img className="cg-avatar" src="https://picsum.photos/100/100" alt="avatar" />
        <p className="cg-welcome">Welcome{userUsername ? `, ${userUsername}` : ''}!</p>
      </div>

      <div>
        <span className="cg-logout" onClick={logout} role="button">
          <span>🔒</span>
          <span>Logout</span>
        </span>
      </div>
    </nav>
  )
}
