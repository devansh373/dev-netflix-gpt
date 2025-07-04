import React from "react";
import {
  Image_Not_Found_Placeholder,
  TMDB_Image_Url,
} from "../utils/constants";
import { Link } from "react-router";
import { useDispatch } from "react-redux";
import { setIsSearchMovie } from "../utils/moviesSlice";
const MovieCard = ({ title, movieImagePath, movieId }) => {
  const dispatch = useDispatch();
  return (
    <Link
      to={`/watch/${movieId}`}
      className=" min-w-[200px] w-[200px]  h-[380px]  rounded-lg shadow-lg  flex flex-col items-center justify-between bg-black hover:bg-amber-900 transition-all duration-300 cursor-pointer overflow-hidden"
      onClick={() => dispatch(setIsSearchMovie(false))}
    >
      <img
        className="w-full aspect-auto rounded-lg hover:scale-[1.1] transition-all duration-300 "
        src={`${
          movieImagePath
            ? TMDB_Image_Url + movieImagePath
            : Image_Not_Found_Placeholder
        } `}
        alt={title}
      />
      <h1 className="p-2 text-white text-center flex items-center justify-center">
        {title}
      </h1>
      {/* <img src={`https://image.tmdb.org/t/p/original/${movie}`} alt={title} /> */}
      {/* <p>{overview}</p> */}
      {/* <p>Release Date: {release_date}</p> */}
      {/* <p>Rating: {vote_average}</p> */}
    </Link>
  );
};

export default MovieCard;
