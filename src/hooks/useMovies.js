import { useRef, useState } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies({ query, rating }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const previousQuery = useRef(true)

  const getMovies = async () => {
    if (previousQuery.current === query) return

    try {
      setLoading(true)
      previousQuery.current = query
      const newMovies = await searchMovies({ query })
      setMovies(newMovies)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }
  const filterRating = rating
    ? [...movies].filter((movie) => Math.floor(movie.vote / 2) < rating)
    : movies

  return { movies: filterRating, getMovies, loading }
}
