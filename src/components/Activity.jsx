import React from 'react'
import './components.css'

export default function Activity({ activity }) {
  // activity expected shape: { id, type, itemTitle, when }
  const text = (() => {
    if (!activity) return ''
    switch (activity.type) {
      case 'favorite':
        return `${activity.username ?? 'Someone'} favorited ${activity.itemTitle}`
      case 'watchlater':
        return `${activity.username ?? 'Someone'} added ${activity.itemTitle} to watch later`
      case 'watch':
        return `${activity.username ?? 'Someone'} watched ${activity.itemTitle}`
      default:
        return activity.text ?? ''
    }
  })()

  return (
    <li className="cg-activity-item">
      <p className="cg-activity-text">{text}</p>
    </li>
  )
}
