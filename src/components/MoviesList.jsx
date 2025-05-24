import React, { use } from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const MoviesList = ({ category }) => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  console.log(movies);
  return (
    <div>

      <h1 className="text-2xl font-medium my-4 px-4 text-white">{category}</h1>
    <div className="w-full flex items-center justify-around  text-white overflow-x-scroll p-2">
      {movies &&
        movies.map((movie) => (
            <MovieCard
            key={movie.id}
            title={movie.original_title}
            movie={movie.poster_path}
            />
        ))}
    </div>
        </div>
  );
};

export default MoviesList;
