const VITE_API_KEY = import.meta.env.VITE_API_KEY

export const searchMovies = async ({ query }) => {
  try {
    if (query === '') {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${VITE_API_KEY}&language=en-US&page=1`
      )
      const json = await response.json()
      const movies = json.results

      return movies?.map((movie) => ({
        id: movie.id,
        title: movie.title,
        popularity: movie.popularity,
        poster: movie.poster_path,
        vote: movie.vote_average,
      }))
    } else if (query.length > 0) {
      return fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${VITE_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
      )
        .then((response) => response.json())
        .then((json) => {
          return json.results?.map((movie) => ({
            id: movie.id,
            title: movie.title,
            popularity: movie.popularity,
            poster: movie.poster_path,
            vote: movie.vote_average,
          }))
        })
    }
  } catch (error) {
    throw new Error('error searching for movies')
  }
}
