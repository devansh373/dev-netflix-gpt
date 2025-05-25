import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: [],
    popularMovies: [],
    topRatedMovies: [],
    upcomingMovies: [],
    trailer: null,
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
  },
});

export const {
  setNowPlayingMovies,
  clearNowPlayingMovies,
  setPopularMovies,
  setMovieTrailer,
  setTopRatedMovies,
  setUpcomingMovies,
} = moviesSlice.actions;
export default moviesSlice.reducer;
