import { useDispatch } from "react-redux";
import { API_OPTION } from "../Utils/Constent";
import { addTrailerVideo } from "../Utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

    //Fetch Official Trailer Video && updating the store with tralier video data

    const getMoviesVideo = async () =>{
        const data = await fetch( `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,API_OPTION);

        const json = await data.json();
      

        const filterData  = json.results.filter((video) => video.type === "Trailer")
        const trailer =filterData.legth ?  json.results[0] : filterData[0] ;
       
        dispatch(addTrailerVideo(trailer))
    };

    useEffect(()=>{
        getMoviesVideo();
    }, [])
}
export default useMovieTrailer;