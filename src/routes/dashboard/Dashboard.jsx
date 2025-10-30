import React from 'react'
import './dashboard.css'
import Header from '../../components/navigation/Header'
import SideBar from '../../components/navigation/SideBar'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// Placeholder pages until real ones are implemented
function HomePage() {
  return (
    <div>
      <h3>Home</h3>
      <p>Home page content will be implemented later.</p>
    </div>
  )
}

function Favorites() {
  return (
    <div>
      <h3>Favorites</h3>
      <p>Favorites page content will be implemented later.</p>
    </div>
  )
}

function WhatchLater() {
  return (
    <div>
      <h3>Watch Later</h3>
      <p>Watch Later page content will be implemented later.</p>
    </div>
  )
}

export default function Dashboard({ userUsername, setIsLoggedIn }) {
  return (
    <BrowserRouter>
      <div className="cg-dashboard" style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: 16 }}>
        <div>
          <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
          <SideBar />
        </div>

        <div className="cg-main">
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/watchlater" element={<WhatchLater />} />
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}
