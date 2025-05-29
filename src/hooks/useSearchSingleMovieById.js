// import { TMDB_Api_Options } from "../utils/constants";

// export default async (movieId,creditsRequired=false) => {
    
//   const data = await fetch(
//     `https://api.themoviedb.org/3/movie/${movieId}${creditsRequired && "/credits"}`,
//     TMDB_Api_Options
//   );
//   const response = await data.json();
//   console.log(response)

//   return response;
// };

// hooks/useSearchSingleMovieById.js
import { useEffect, useState } from "react";
import { TMDB_Api_Options } from "../utils/constants";

const useSearchSingleMovieById = (movieId, creditsRequired = false) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}${creditsRequired ? "/credits" : ""}`,
        TMDB_Api_Options
      );
      const json = await res.json();
      setData(json);
    };
    if (movieId) fetchMovie();
  }, [movieId, creditsRequired]);

  return data;
};

export default useSearchSingleMovieById;
