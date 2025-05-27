import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: [],
    popularMovies: [],
    topRatedMovies: [],
    upcomingMovies: [],
    trailer: null,
    watchPageMovie: null,
    // watchPageMovieVideo: null,//Videos api is different, to save one api call this is done
  },
  reducers: {
    setNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    clearNowPlayingMovies: (state) => {
      state.nowPlayingMovies = [];
    },

    setPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    setTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    setUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    setMovieTrailer: (state, action) => {
      state.trailer = action.payload;
    },
    // setWatchPageMovie: (state, action) => {
    //   state.watchPageMovie = action.payload;
    // },
  },
});

export const {
  setNowPlayingMovies,
  clearNowPlayingMovies,
  setPopularMovies,
  setMovieTrailer,
  setTopRatedMovies,
  setUpcomingMovies,
  setWatchPageMovie,
} = moviesSlice.actions;
export default moviesSlice.reducer;
