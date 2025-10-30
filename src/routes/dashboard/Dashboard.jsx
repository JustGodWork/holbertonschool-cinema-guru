import React from 'react'
import './dashboard.css'
import Header from '../../components/navigation/Header'
import SideBar from '../../components/navigation/SideBar'

export default function Dashboard({ userUsername, setIsLoggedIn }) {
  return (
    <div className="cg-dashboard" style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: 16 }}>
      <div>
        <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
        <SideBar />
      </div>

      <div className="cg-main">
        <h2>Dashboard</h2>
        <p>This is the dashboard area — more components will be added here.</p>
      </div>
    </div>
  )
}
