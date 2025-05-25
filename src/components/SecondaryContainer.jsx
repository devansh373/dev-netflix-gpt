import React from "react";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";

export const SecondaryContainer = () => {
  const categories = [
    {
      nowPlayingMovies: {
        title: "Now Playing",
        movies: [],
      },
    },
    {
      popularMovies: {
        title: "Popular",
        movies: [],
      },
    },
    {
      topRatedMovies: {
        title: "Top Rated",
        movies: [],
      },
    },
    {
      upcomingMovies: {
        title: "Upcoming",
        movies: [],
      },
    },
  ];
  categories[0].nowPlayingMovies.movies = useSelector(
    (store) => store.movies?.nowPlayingMovies
  );
  categories[1].popularMovies.movies = useSelector(
    (store) => store.movies?.popularMovies
  );
  categories[2].topRatedMovies.movies = useSelector(
    (store) => store.movies?.topRatedMovies
  );
  categories[3].upcomingMovies.movies = useSelector(
    (store) => store.movies?.upcomingMovies
  );
  console.log(
    categories.map((category) =>
      Object.values(category).map((item) => console.log(item))
    )
  );
  return (
    <div className="w-full">
      {categories.map((category) =>
      Object.values(category).map((item) => <MoviesList key={item.title} category={item.title} movies={item.movies}/>)
    )}
      {/* <MoviesList category={"Now Playing"} />
      <MoviesList category={"Popular"} />
      <MoviesList category={"Top Rated"} />
      <MoviesList category={"Upcoming"} /> */}
    </div>
  );
};
