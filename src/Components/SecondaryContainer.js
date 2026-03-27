import { useSelector } from "react-redux"
import MovieCard from "./MovieCard"
import MovieList from "./MovieList"

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies);
  return (
    <div className=" bg-black">
      <div className="-mt-80 pl-12 relative z-20">
      <MovieList  title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieList  title={"Top Rated"} movies={movies.TopRatedMovies} />
      <MovieList  title={"Popular"} movies={movies.PopularMovies} />
      <MovieList  title={"Upcoming Movies"} movies={movies.UpcomingMovies} />
      <MovieList  title={"Horror"} movies={movies.nowPlayingMovies} />
     </div>
      {
        /*
        MovieList - Popular
          MoviesCards * n
        MovieList - Now Playing
        MovieList - Treading
        MovieList - Horror 
        */
      }
    </div>
  )
}

export default SecondaryContainer