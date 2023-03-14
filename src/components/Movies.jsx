import React from "react";
import { Link } from "react-router-dom";
function ListOfMovies ({ movies }) {
  return (
    <>
      <ul className="movies">
        {
          movies.map(movie => (
            <li className="movie" key={movie.id}>
              <Link to={`/${movie.id}`}>
                <h3>{movie.title}</h3>
                <span>{movie.popularity}</span>
                <img src={`	https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster}`} alt="" />
              </Link>
            </li>
          ))
        }
      </ul>
    </>
  )
}
function NoMovies () {
  return (
    <p>No se encontraron peliculas</p>
  )
}

export function Movies ({ movies }) {
  const hasMovies = movies?.length > 0
  return (
    hasMovies ?
      <ListOfMovies movies={movies} />
      : <NoMovies />
  )
}