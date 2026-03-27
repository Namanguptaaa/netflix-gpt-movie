import { useDispatch } from "react-redux";
import { API_OPTION } from "../Utils/Constent";
import useMovieTrailer from "./useMovieTrailer";
import { addNowPlayingMovies } from "../Utils/moviesSlice";
import { useEffect } from "react";



const useNowPLayingMovies=() =>{

    const dispatch  = useDispatch();

  const getNowPLayingMovies = async ( ) => {
    const data = await fetch (
      "https://api.themoviedb.org/3/movie/now_playing?&page=1",
      API_OPTION
    );
    const json = await data.json();

    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() =>{
    getNowPLayingMovies();
  }, []);

//  useMovieTrailer();

  <iframe width="560" 
  height="315"
   src="https://www.youtube.com/embed/p4aWdkM5xF8?+=rQSWJra_He8wVyXK" 
   title="YouTube video player"
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  referrerpolicy="strict-origin-when-cross-origin" 
  llowfullscreen
  ></iframe>
};

export default useNowPLayingMovies;