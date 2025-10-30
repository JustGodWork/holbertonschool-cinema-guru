import React from 'react'
import './dashboard.css'
import Header from '../../components/navigation/Header'

export default function Dashboard({ userUsername, setIsLoggedIn }) {
  return (
    <div className="cg-dashboard">
      <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />

      <div className="cg-main">
        <h2>Dashboard</h2>
        <p>This is the dashboard area — more components will be added here.</p>
      </div>
    </div>
  )
}
