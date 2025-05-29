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
    isSearchMovie:false,
    searchedMovies:[]
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
    setWatchPageMovie: (state, action) => {
      state.watchPageMovie = action.payload;
    },
    setIsSearchMovie: (state, action) => {
      state.isSearchMovie = action.payload;
    },
    setSearchedMovies: (state, action) => {
      state.searchedMovies = action.payload;
    },
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
  setIsSearchMovie,
  setSearchedMovies
} = moviesSlice.actions;
export default moviesSlice.reducer;
