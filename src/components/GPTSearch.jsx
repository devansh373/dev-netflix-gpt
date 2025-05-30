import { useRef, useState } from "react";

import MoviesList from "./MoviesList";
import { useDispatch, useSelector } from "react-redux";
import { setGPTMovies } from "../utils/gptSlice";
import useGPTMovieSearch from "../hooks/useGPTMovieSearch";
import { RiErrorWarningLine } from "react-icons/ri";

const GPTSearch = () => {
  const inputValue = useRef();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const gptMovies = useSelector((store) => store.gpt.gptMovies);
  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const results = await useGPTMovieSearch(inputValue.current);
    dispatch(setGPTMovies(results));
    setIsLoading(false);
  };

  return (
    <div
      className={`pt-[29%] sm:pt-[15%] w-full ${
        !gptMovies.length > 0 && "h-screen"
      }  netflix-hero-bg bg-cover bg-no-repeat bg-center`}
    >
      <form
        className=" sm:w-[600px]  sm:h-[200px] mx-auto p-4 bg-gray-800/90 flex items-center rounded-lg border border-white"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          ref={inputValue}
          type="text"
          name="movie-name"
          id="movie-name"
          onChange={(e) => (inputValue.current = e.target.value)}
          placeholder="Try 'Horror Movies'"
          className="p-2 text-xl rounded-lg text-white w-[80%] border border-white"
        />
        <button
          type="submit"
          className="bg-amber-700 p-2 text-white text-lg rounded-lg ml-2 cursor-pointer hover:bg-amber-800"
        >
          {isLoading ? "Loading" : "Submit"}
        </button>
      </form>
      <h1 className="text-white text-center text-xl flex justify-center items-center gap-2 underline mt-2">
        <RiErrorWarningLine className="text-3xl  font-bold" /> Ai search results are not accurate!
      </h1>
      <div
        className={`w-full bg-gray-800/90 mt-2 ${gptMovies.length && "p-2"}`}
      >
        {inputValue.current &&
          gptMovies &&
          gptMovies.map((m1) => <MoviesList category={""} movies={m1} />)}
      </div>
    </div>
  );
};

export default GPTSearch;
