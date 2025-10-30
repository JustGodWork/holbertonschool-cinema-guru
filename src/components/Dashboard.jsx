import React from 'react'

export default function Dashboard({ username }) {
  return (
    <div style={{ padding: 20 }}>
      <h2>Dashboard</h2>
      {username && <p>Welcome, {username}!</p>}
    </div>
  )
}
