import { TMDB_Api_Options } from "../utils/constants";

export default async (movieId) => {
    
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}`,
    TMDB_Api_Options
  );
  const response = await data.json();
  console.log(response)

  return response;
};
