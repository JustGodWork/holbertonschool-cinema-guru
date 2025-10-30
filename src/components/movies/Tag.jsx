import React, { useState } from 'react'
import './movies.css'

export default function Tag({ genre, genres = [], setGenres }) {
  const [selected, setSelected] = useState(false)

  const handleTag = () => {
    if (selected) {
      // remove
      const next = genres.filter((g) => g !== genre)
      setGenres?.(next)
      setSelected(false)
    } else {
      const next = Array.isArray(genres) ? [...genres, genre] : [genre]
      setGenres?.(next)
      setSelected(true)
    }
  }

  return (
    <li className={`cg-tag-item ${selected ? 'selected' : ''}`} onClick={handleTag}>
      {genre}
    </li>
  )
}
