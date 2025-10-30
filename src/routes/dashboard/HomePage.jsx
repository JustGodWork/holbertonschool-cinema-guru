import React, { useEffect, useState, useCallback } from 'react'
import './dashboard.css'
import MovieCard from '../../components/movies/MovieCard'
import Filter from '../../components/movies/Filter'
import Button from '../../components/general/Button'
import axios from 'axios'

export default function HomePage() {
  const [movies, setMovies] = useState([])
  const [minYear, setMinYear] = useState(1970)
  const [maxYear, setMaxYear] = useState(2022)
  const [genres, setGenres] = useState([])
  const [sort, setSort] = useState('')
  const [title, setTitle] = useState('')
  const [page, setPage] = useState(1)

  const loadMovies = useCallback(async (pageToLoad = 1) => {
    try {
      const res = await axios.get('/api/titles/advancedsearch', {
        params: {
          minYear,
          maxYear,
          genres,
          title,
          sort,
          page: pageToLoad,
        },
      })

      const data = res.data || []
      if (pageToLoad === 1) setMovies(data)
      else setMovies((prev) => [...prev, ...data])
      setPage(pageToLoad)
    } catch {
      // ignore
    }
  }, [minYear, maxYear, genres, title, sort])

  useEffect(() => {
    // reload when filters change
    loadMovies(1)
  }, [loadMovies])

  return (
    <div>
      <Filter
        minYear={minYear}
        setMinYear={setMinYear}
        maxYear={maxYear}
        setMaxYear={setMaxYear}
        sort={sort}
        setSort={setSort}
        genres={genres}
        setGenres={setGenres}
        title={title}
        setTitle={setTitle}
      />

      <ul className="cg-movie-list">
        {movies.map((m) => (
          <MovieCard key={m.imdbId ?? m.id} movie={m} />
        ))}
      </ul>

      <div style={{ marginTop: 12 }}>
        <Button label="Load More.." onClick={() => loadMovies(page + 1)} />
      </div>
    </div>
  )
}
