import { useEffect } from "react";
import { TMDB_Api_Options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { setMovieTrailer } from "../utils/moviesSlice";

export default (videoId) => {
  const dispatch = useDispatch();
  console.log(videoId);
  useEffect(() => {
    videoId &&
      fetch(
        `https://api.themoviedb.org/3/movie/${videoId}/videos`,
        TMDB_Api_Options
      )
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          const trailer = json.results.find(
            (video) => video.type === "Trailer" && video.site === "YouTube"
          );

          console.log(trailer);

          trailer && dispatch(setMovieTrailer(trailer));
        })
        .catch((err) => console.error(err));
  }, [videoId]);
};
