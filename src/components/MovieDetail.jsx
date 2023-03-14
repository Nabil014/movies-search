import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
const VITE_API_KEY = import.meta.env.VITE_API_KEY

export function MovieDetail () {
  const [movieInfo, setMovieInfo] = useState([])
  const [image, setImage] = useState()
  const { id } = useParams()

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${VITE_API_KEY}&language=es`
    )
      .then(res => res.json())
      .then(json => setMovieInfo([json]))

    fetch(`https://api.themoviedb.org/3/movie/${id}/images?api_key=${VITE_API_KEY}`)
      .then(res => res.json())
      .then(json => setImage([json.backdrops[1]]))
  }, [id])

  return (
    <div>
      {
        image?.map((image) => (

          <img key={id} src={`	https://image.tmdb.org/t/p/original/${image.file_path}`} alt='img' />
        ))
      }
      {
        movieInfo?.map(info => (
          <article key={info.id}>
            <h3>{info.title}</h3>
            <p>{info.overview}</p>
          </article>
        ))
      }
    </div>
  )
}
