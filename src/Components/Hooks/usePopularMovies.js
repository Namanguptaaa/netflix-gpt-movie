import { useEffect } from "react";
import { addPopularMovies } from "../Utils/moviesSlice";
import { useDispatch } from "react-redux";
import { API_OPTION } from "../Utils/Constent";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTION
    );
    const json = await data.json();

    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;