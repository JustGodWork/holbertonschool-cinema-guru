import React, { useEffect, useState } from 'react'
import './navigation.css'
import '../components.css'
import axios from 'axios'
import Activity from '../Activity'
import { useNavigate } from 'react-router-dom'

export default function SideBar() {
  const [selected, setSelected] = useState('home')
  const [activities, setActivities] = useState([])
  const navigate = useNavigate()

  const setPage = (pageName) => {
    setSelected(pageName)
    if (pageName === 'home') navigate('/home')
    if (pageName === 'favorites') navigate('/favorites')
    if (pageName === 'watchlater') navigate('/watchlater')
  }

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const res = await axios.get('/api/activity')
        setActivities(res.data || [])
      } catch {
        setActivities([])
      }
    }

    fetchActivities()
  }, [])

  return (
    <aside className="cg-sidebar">
      <ul className="nav-list">
        <li className={`nav-item ${selected === 'home' ? 'active' : ''}`} onClick={() => setPage('home')}>🏠 Home</li>
        <li className={`nav-item ${selected === 'favorites' ? 'active' : ''}`} onClick={() => setPage('favorites')}>⭐ Favorites</li>
        <li className={`nav-item ${selected === 'watchlater' ? 'active' : ''}`} onClick={() => setPage('watchlater')}>⏱️ Watch Later</li>
      </ul>

      <div style={{ marginTop: 12 }}>
        <h4>Recent activity</h4>
        <ul className="cg-activity-list">
          {activities.slice(0, 10).map((a) => (
            <Activity key={a.id ?? a._id ?? Math.random()} activity={a} />
          ))}
        </ul>
      </div>
    </aside>
  )
}
