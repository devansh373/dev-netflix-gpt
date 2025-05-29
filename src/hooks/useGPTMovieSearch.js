import { GoogleGenAI, Type } from "@google/genai";
import { Gemini_API_Key, TMDB_Api_Options } from "../utils/constants";
// import useSearchSingleMovie from "./useSearchSingleMovie";

const callApi = async (movieName) => {
  // useSearchSingleMovie(movieName);
    const data = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${movieName}`,
        // `https://api.themoviedb.org/3/movie/${movie_id}`,
        TMDB_Api_Options
      );
      const response = await data.json();
    
      return response.results;
};
export default async function useGPTMovieSearch(inputValue) {
  const ai = new GoogleGenAI({ apiKey: Gemini_API_Key });
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: `Act as a movie recommendation system and give comma seperated list of only names of the movies from given query without double quotes. Query: ${inputValue}`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.STRING,
        },
        minItems: 5,
      },
    },
  });

  const promiseArray = response.text.split(",").map((movie) => callApi(movie));
  const results = await Promise.all(promiseArray);
  return results;
}
