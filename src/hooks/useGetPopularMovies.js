import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TMDB_Api_Options } from "../utils/constants";
import { setNowPlayingMovies, setPopularMovies } from "../utils/moviesSlice";

export default () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
    //   "https://api.themoviedb.org/3/movie/575265/videos?language=en-US",
      TMDB_Api_Options
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch(setPopularMovies(data.results));
      });
  }, []);
};
