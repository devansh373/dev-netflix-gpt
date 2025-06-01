import React from "react";
import { FaPlay } from "react-icons/fa";
import { Link, useNavigate } from "react-router";

const VideoTitle = ({
  videoTitle,
  overview,
  videoId,
  isWatchPage,
  movieDetails,
}) => {
  const navigate = useNavigate()
  const obj = {
    adult: false,
    backdrop_path: "/14UFWFJsGeInCbhTiehRLTff4Yx.jpg",
    belongs_to_collection: null,
    budget: 0,
    genres: [
      {
        id: 53,
        name: "Thriller",
      },
      {
        id: 28,
        name: "Action",
      },
    ],
    homepage: "https://www.netflix.com/title/81571720",
    id: 1233069,
    imdb_id: "tt30876483",
    origin_country: ["AT", "DE"],
    original_language: "de",
    original_title: "Exterritorial",
    overview:
      "When her son vanishes inside a US consulate, ex-special forces soldier Sara does everything in her power to find him — and uncovers a dark conspiracy.",
    popularity: 148.7892,
    poster_path: "/jM2uqCZNKbiyStyzXOERpMqAbdx.jpg",
    production_companies: [
      {
        id: 114791,
        logo_path: "/jeTQ9G3haIbLn8Shrc9OxPafST6.png",
        name: "Constantin Television",
        origin_country: "DE",
      },
      {
        id: 1833,
        logo_path: "/6Ot5X5xRv0PvZ9cUUD5ZymSruLi.png",
        name: "Epo-Film",
        origin_country: "AT",
      },
    ],
    production_countries: [
      {
        iso_3166_1: "DE",
        name: "Germany",
      },
      {
        iso_3166_1: "AT",
        name: "Austria",
      },
    ],
    release_date: "2025-04-29",
    revenue: 0,
    runtime: 109,
    spoken_languages: [
      {
        english_name: "English",
        iso_639_1: "en",
        name: "English",
      },
      {
        english_name: "German",
        iso_639_1: "de",
        name: "Deutsch",
      },
    ],
    status: "Released",
    tagline: "",
    title: "Exterritorial",
    video: false,
    vote_average: 6.713,
    vote_count: 399,
  };
  return (
    // bg-black/15
    // w-[700px]
    <div
      className={`${
        !isWatchPage ? "absolute h-[63vh]":"h-[32vh]"
      } w-full  sm:bottom-0 sm:h-full  text-white shadow-lg bg-gradient-to-r from-black/30 to-transparent flex flex-col-reverse z-6 ${isWatchPage &&" pt-[14%] svg-bg"}`}
    >
      <div
        className={`w-full p-10 ${
          isWatchPage && "flex flex-col justify-center items-center"
        }`}
      >
        <h1 className="sm:text-3xl font-bold  p-4 sm:w-[500px] rounded-lg text-center">
          {videoTitle}
        </h1>
        <h1 className="text-sm text-justify sm:w-[600px] max-h-[50px]  text-ellipsis line-clamp-2">{overview}</h1>
        <div className="flex items-center gap-2 mt-3">
          {isWatchPage ? (
            <div className="">
              {/* <h1>Starring:{movieDetails}</h1> */}
              {
                <h1>Genres: {movieDetails?.genres.map((genre) => (genre.name)).join(", ")}</h1>
              }
              {/* {movieDetails?.genres.map((genre) => (
                <h1>Genres:{genre.name}</h1>
              ))} */}
            </div>
          ) : (
            <>
              <Link
                to={`/watch/${videoId}`}
                className="sm:w-[200px] w-[100px] p-2 sm:p-3 bg-gray-100 text-black font-medium text-lg sm:text-xl rounded-lg mx-2 flex gap-2 items-center sm:pl-15 pl-5 cursor-pointer hover:bg-gray-400"
              >
                <FaPlay />
                <button>Play</button>
              </Link>
              <button className="sm:w-[200px] w-[100px] p-2 sm:p-3 bg-gray-400 text-white sm:font-medium sm:text-xl text-lg rounded-lg mx-2 cursor-pointer hover:bg-gray-500 " onClick={()=>navigate(`/movieDetails/${videoId}`)}>
                More Info
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
