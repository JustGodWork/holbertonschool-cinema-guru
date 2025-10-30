import React from 'react'
import './general.css'

export default function Button({ label, className = '', onClick, icon }) {
  return (
    <button className={`cg-button ${className}`.trim()} onClick={onClick}>
      {icon && <span className="cg-button-icon">{icon}</span>}
      <span className="cg-button-label">{label}</span>
    </button>
  )
}
