import React, { useEffect, useState } from 'react'
import './movies.css'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons'
import { faClock as solidClock } from '@fortawesome/free-solid-svg-icons'

export default function MovieCard({ movie }) {
  const [isFavorite, setIsFavorite] = useState(false)
  const [isWatchLater, setIsWatchLater] = useState(false)

  useEffect(() => {
    const fetchLists = async () => {
      try {
        const favRes = await axios.get('/api/titles/favorite/')
        const wlRes = await axios.get('/api/titles/watchlater/')
        const favs = favRes.data || []
        const wls = wlRes.data || []

        setIsFavorite(favs.some((m) => m.imdbId === movie.imdbId || m.id === movie.id))
        setIsWatchLater(wls.some((m) => m.imdbId === movie.imdbId || m.id === movie.id))
      } catch {
        // ignore
      }
    }

    fetchLists()
  }, [movie])

  const handleClick = async (type) => {
    try {
      const isFavType = type === 'favorite'
      const currentState = isFavType ? isFavorite : isWatchLater
      const route = `/api/titles/${type}/${movie.imdbId}`

      if (currentState) {
        await axios.delete(route)
        if (isFavType) setIsFavorite(false)
        else setIsWatchLater(false)
      } else {
        await axios.post(route)
        if (isFavType) setIsFavorite(true)
        else setIsWatchLater(true)
      }
    } catch {
      // ignore
    }
  }

  return (
    <li className="cg-movie-card">
      <div className="cg-movie-icons">
        <FontAwesomeIcon className={`cg-movie-icon ${isFavorite ? 'active' : ''}`} icon={solidHeart} onClick={() => handleClick('favorite')} />
        <FontAwesomeIcon className={`cg-movie-icon ${isWatchLater ? 'active' : ''}`} icon={solidClock} onClick={() => handleClick('watchlater')} />
      </div>

      <h4 className="cg-movie-title">{movie.title}</h4>
      <p className="cg-movie-synopsis">{movie.synopsis}</p>

      <div className="cg-movie-genres">
        {(movie.genres || []).map((g) => (
          <span key={g} className="cg-movie-genre">{g}</span>
        ))}
      </div>
    </li>
  )
}
