import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

import useSearchSingleMovieById from "../hooks/useSearchSingleMovieById";
import Header from "./Header";
import { setWatchPageMovie } from "../utils/moviesSlice";
import { setGPTSearch } from "../utils/gptSlice";
import { TMDB_Image_Url } from "../utils/constants";
import useGetSpecificMovieVideos from "../hooks/useGetSpecificMovieVideos";
import Videobackground from "./Videobackground";
import VideoTitle from "./VideoTitle";

const WatchPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const movieObject = useSelector((store) => store.movies.watchPageMovie);
  const trailer = useSelector((store) => store.movies.trailer);
  console.log(movieObject, trailer);
  //   const [movieObject, setMovieObject] = useState({});
  useEffect(() => {
    useSearchSingleMovieById(params.movieId).then((data) => {
      // console.log("Movie Data:", data);
      dispatch(setWatchPageMovie(data));
    });
  }, []);
  useGetSpecificMovieVideos(params?.movieId);

  return (
    <div className="w-full">
      <Header isWatchPage={true} />
      {/* <h1 className="text-white absolute top-0 left-[40%] p-2 bg-black/70 z-11">{movieObject?.original_title}</h1> */}
      <Videobackground isWatchPage={true}/>
      <VideoTitle videoTitle={movieObject?.original_title} overview={movieObject?.overview} videoId={params?.movieId} isWatchPage={true} movieDetails={movieObject}/>
      {/* <div className="w-full h-screen relative">
        {/* <img src={TMDB_Image_Url+movieObject?.poster_path} alt="" className="w-[600px] h-[600px]" /> }
        <iframe
          className="w-full h-full aspect-video"
          src={`https://www.youtube.com/embed/${trailer?.key}`}
          title={movieObject?.original_title}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div> */}
    </div>
  );
};

export default WatchPage;
