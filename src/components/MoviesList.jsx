import React, { use, useState } from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const MoviesList = ({ category,movies }) => {
  const [showArrow, setShowArrow] = useState(false);
  
  return (
    <div className="relative ">
      <h1 className="text-2xl font-medium mt-17 px-4 text-white">{category}</h1>
      <div
        className="  w-full flex items-center justify-around gap-[5%]  text-white overflow-x-scroll p-2 mt-12 no-scrollbar "
        // border border-amber-100
        onMouseOver={() => setShowArrow(true)}
        onMouseLeave={() => setShowArrow(false)}
      >
        {showArrow && (
          <span className="absolute left-2 z-30  top-[40%] text-2xl text-white p-4  cursor-pointer hover:bg-amber-900 bg-gray-700 transition-all duration-300">
            &lt;
          </span>
        )}
        {showArrow && (
          <span className="absolute right-2 z-30  top-[40%] text-2xl text-white p-4  cursor-pointer hover:bg-amber-900 bg-gray-700 transition-all duration-300">
            &gt;
          </span>
        )}
        
        {movies &&
          movies.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.original_title}
              movie={movie.poster_path}
              movieId={movie.id}
            />
          ))}
      </div>
    </div>
  );
};

export default MoviesList;
