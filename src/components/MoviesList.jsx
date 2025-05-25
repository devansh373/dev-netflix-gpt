import React, { use, useState } from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const MoviesList = ({ category,movies }) => {
  const [showArrow, setShowArrow] = useState(false);
  
  return (
    <div className="relative">
      <h1 className="text-2xl font-medium my-4 px-4 text-white">{category}</h1>
      <div
        className="  w-full flex items-center justify-around  text-white overflow-x-scroll p-2 no-scrollbar"
        onMouseOver={() => setShowArrow(true)}
        onMouseLeave={() => setShowArrow(false)}
      >
        {showArrow && (
          <span className="absolute left-2 z-30  top-[40%] text-2xl text-white p-4 bg-gray-600/50 cursor-pointer hover:bg-gray-700 transition-all duration-300">
            &lt;
          </span>
        )}
        {showArrow && (
          <span className="absolute right-2 z-30  top-[40%] text-2xl text-white p-4 bg-gray-600/50 cursor-pointer hover:bg-gray-700 transition-all duration-300">
            &gt;
          </span>
        )}
        
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
