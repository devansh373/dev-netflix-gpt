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

const Browse = () => {
  const isGPTSearch = useSelector((store) => store.gpt?.isGPTSearch);
  useGetNowPlayingMovies();
  useGetPopularMovies();
  useGetTopRatedMovies();
  useGetUpcomingMovies();
  return (
    // <div className="netflix-hero-bg filter brightness-75 ">
    <div className="bg-red-950 ">
      
      {/* <div className="z-[2]"></div> */}
      <Header />
      {isGPTSearch ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
