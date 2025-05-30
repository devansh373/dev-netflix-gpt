import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useSearchSingleMovieById from "../hooks/useSearchSingleMovieById";
import { Image_Not_Found_Placeholder, TMDB_Image_Url } from "../utils/constants";
const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const [movieCreditsCast, setMovieCreditsCast] = useState([]);
  const [movieCreditsCastSliced, setMovieCreditsCastSliced] = useState([]);
  const { movieId } = useParams();
  // credits api for star cast details
  const movieCredits = useSearchSingleMovieById(movieId, true)
  const  movieDetailsData= useSearchSingleMovieById(movieId)
  useEffect(() => {
    // .then((data) => {
      //   console.log(data);
      //   setMovieDetails(data);
      // });
      movieDetailsData&& setMovieDetails(movieDetailsData)
      movieCredits && setMovieCreditsCast(movieCredits?.cast);
      movieCredits && setMovieCreditsCastSliced(movieCredits?.cast?.slice(0, 10));
      // setMovieCreditsCast()
    // .then((data) => {
    //   console.log(data);
    // });
  }, [movieCredits,movieDetailsData]);
  return (
    <div className="svg-bg text-white pl-3">
      <h1 className="font-bold text-2xl py-4 ">Movie Name:</h1>
      <h1 className="text-gray-300">{movieDetails?.original_title} </h1>
      <h1 className="font-bold text-2xl py-4">Overview:</h1>
      <h1>{movieDetails?.overview}</h1>

      <ul className="pt-4">
        <li className="font-bold text-2xl">Star Cast:</li>
        {movieCreditsCastSliced?.map((person, index) => (
          <li
            className={`pl-4 mt-8 flex justify-around w-full items-center hover:bg-gray-900/20 rounded-lg ${
              index % 2 !== 0 ? "flex-row-reverse" : ""
            }`}
          >
            <h1 className="sm:text-3xl text-xl">{person?.name}</h1>
            <img
              src={person.profile_path?(TMDB_Image_Url + person.profile_path):Image_Not_Found_Placeholder}
              alt="Cast Profile Picture"
              className="sm:w-[300px] w-[160px] rounded-lg shadow-lg shadow-black"
            />
          </li>
        ))}

        {movieCreditsCastSliced?.length<movieCreditsCast?.length&&
          <li
          className="text-center text-white -ml-3 p-2 bg-amber-950 cursor-pointer hover:bg-amber-900"
          onClick={() =>movieCreditsCastSliced.length<movieCreditsCast.length&&
            setMovieCreditsCastSliced(
              movieCreditsCast?.slice(0, movieCreditsCastSliced.length + 10)
            )
          }
        >
          Load More...
        </li>}
      </ul>
    </div>
  );
};

export default MovieDetails;
