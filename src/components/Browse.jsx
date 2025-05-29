import Header from "./Header";
import useGetNowPlayingMovies from "../hooks/useGetNowPlayingMovies";
import MainContainer from "./MainContainer";
import { SecondaryContainer } from "./SecondaryContainer";
import useGetPopularMovies from "../hooks/useGetPopularMovies";
import useGetTopRatedMovies from "../hooks/useGetTopRatedMovies";
import { use } from "react";
import useGetUpcomingMovies from "../hooks/useGetUpcomingMovies";
import { useSelector } from "react-redux";
import GPTSearch from "./GPTSearch";
import SearchMovieComponent from "./SearchMovieComponent";

const Browse = () => {
  const isGPTSearch = useSelector((store) => store.gpt?.isGPTSearch);
  const isSearchMovie = useSelector((store) => store.movies.isSearchMovie);
  useGetNowPlayingMovies();
  useGetPopularMovies();
  useGetTopRatedMovies();
  useGetUpcomingMovies();
  return (
    // <div className="netflix-hero-bg filter brightness-75 ">
    <div className="bg-red-950 svg-bg">
      {/* <div className="z-[2]"></div> */}
      <Header />
      {isGPTSearch ? (
        <GPTSearch />
      ) : (
        <>
          {isSearchMovie ? (
            <>
            <SearchMovieComponent/>
            </>
          ) : (
            <>
              <MainContainer />
              <SecondaryContainer />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Browse;
