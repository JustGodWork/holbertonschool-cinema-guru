import React from 'react'
import './general.css'

export default function SearchBar({ title, setTitle, className = '' }) {
  const handleInput = (e) => {
    if (typeof setTitle === 'function') setTitle(e.target.value)
  }

  return (
    <div className={`cg-searchbar-wrapper ${className}`.trim()}>
      <input
        className="cg-searchbar"
        type="search"
        placeholder="Search"
        value={title}
        onChange={handleInput}
      />
    </div>
  )
}
