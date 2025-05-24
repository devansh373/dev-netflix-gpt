import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState:{
        nowPlayingMovies:[],
        trailer:null,
    },
    reducers:{
        setNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        clearNowPlayingMovies: (state) => {
            state.nowPlayingMovies = [];
        },
        setMovieTrailer: (state, action) => {
            state.trailer = action.payload;
        },
    }
})

export const { setNowPlayingMovies, clearNowPlayingMovies,setMovieTrailer } = moviesSlice.actions;
export default moviesSlice.reducer;