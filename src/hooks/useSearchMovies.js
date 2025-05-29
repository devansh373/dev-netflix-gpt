import { useEffect, useState } from "react";
import { TMDB_Api_Options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { setSearchedMovies } from "../utils/moviesSlice";

const useSearchMovies = (movieName) => {
  const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const timer = setTimeout(() => {
      fetch(
        `https://api.themoviedb.org/3/search/movie?query=${movieName}`,
        TMDB_Api_Options
      )
        .then((data) => data.json())
        .then((res) => {
          console.log(res.results);
          setMovies(res.results);
          dispatch(setSearchedMovies(res.results));
        });
    }, 200);
    return () => clearTimeout(timer);
  }, [movieName]);
  return movies;
};

export default useSearchMovies;
