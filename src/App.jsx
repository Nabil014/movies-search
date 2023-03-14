import React, { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from "react-router-dom";
import './App.css'
import { MovieDetail } from './components/MovieDetail'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import Rating from './components/Rating';


function App () {
  const [query, setQuery] = useState('')
  const [rating, setRating] = useState(false)
  const { movies, getMovies, loading } = useMovies({ query, rating })
  const location = useLocation()

  useEffect(() => {
    if (!query) {
      getMovies()
    }
  }, [query])

  const handleRating = (value) => {
    setRating(value)
  }


  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies()

  }

  const handleChange = (event) => {
    setQuery(event.target.value)
  }


  return (
    <div className='page'>
      {
        location.pathname === '/' ? <header>
          <h1>Buscador de peliculas</h1>
          <form className='form' onSubmit={handleSubmit}>
            <input onChange={handleChange} type="text" placeholder='Batman, Superman...' />
            <button type='submit'>Buscar</button>
          </form>
          <Rating handleRating={handleRating} rating={rating} />
        </header>
          : ''
      }
      <main>
        {
          loading ? <p>Cargando...</p> :
            <Routes>
              <Route path='/' element={<Movies movies={movies} />} />
              <Route path='/:id' element={<MovieDetail />} />
            </Routes>
        }
      </main>
    </div>
  )
}

export default App
