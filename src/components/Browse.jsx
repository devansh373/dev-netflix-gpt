import Header from "./Header";
import useGetNowPlayingMovies from "../hooks/useGetNowPlayingMovies";
import MainContainer from "./MainContainer";
import { SecondaryContainer } from "./SecondaryContainer";
import useGetPopularMovies from "../hooks/useGetPopularMovies";
import useGetTopRatedMovies from "../hooks/useGetTopRatedMovies";
import { use } from "react";
import useGetUpcomingMovies from "../hooks/useGetUpcomingMovies";

const Browse = () => {
  useGetNowPlayingMovies();
useGetPopularMovies();
useGetTopRatedMovies();
useGetUpcomingMovies();
  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
      
    </div>
  );
};

export default Browse;
