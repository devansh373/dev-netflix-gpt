import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState:{
        isGPTSearch: false,
        gptMovies:[]
    },
    reducers:{
        setGPTSearch: (state) => {
            state.isGPTSearch = !state.isGPTSearch;
        },
        clearGPTSearch: (state) => {
            state.isGPTSearch = false;
        },
        setGPTMovies:(state,action)=>{
state.gptMovies = action.payload;
        },
        clearGPTMovies:(state)=>{
            state.gptMovies=[]
        }
    }
})
export const { setGPTSearch,clearGPTSearch,setGPTMovies,clearGPTMovies } = gptSlice.actions;
export default gptSlice.reducer;