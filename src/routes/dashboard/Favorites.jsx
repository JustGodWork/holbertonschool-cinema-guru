import React, { useEffect, useState } from 'react'
import './dashboard.css'
import MovieCard from '../../components/movies/MovieCard'
import axios from 'axios'

export default function Favorites() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const res = await axios.get('/api/titles/favorite/')
        setMovies(res.data || [])
      } catch {
        setMovies([])
      }
    }

    fetchFavorites()
  }, [])

  return (
    <div>
      <h1>Movies you like</h1>
      <ul className="cg-movie-list">
        {movies.map((m) => (
          <MovieCard key={m.imdbId ?? m.id} movie={m} />
        ))}
      </ul>
    </div>
  )
}
