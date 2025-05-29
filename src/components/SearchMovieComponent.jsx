import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const SearchMovieComponent = () => {
  const movies = useSelector((store) => store.movies.searchedMovies);
  console.log(movies);
  return (
    <div
      className={`flex flex-wrap ${
        movies.length > 0 ? "w-full" : "w-screen"
      } svg-bg ${movies.length > 0 ? "h-full" : "h-screen"} gap-4 pt-35`}
    >
      {movies.length > 0 ? (
        movies.map((movie) => (
          <MovieCard
            title={movie.original_title}
            movieImagePath={movie.poster_path}
            movieId={movie.id}
          />
        ))
      ) : (
        <div className="flex w-full h-full items-center justify-center text-white text-2xl">
            No results found.
        </div>
      )}
    </div>
  );
};

export default SearchMovieComponent;
