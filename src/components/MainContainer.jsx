import React from 'react'
import Videobackground from './Videobackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'
import useGetSpecificMovieVideos from '../hooks/useGetSpecificMovieVideos'

const MainContainer = () => {
    const movies = useSelector(store=>store.movies.nowPlayingMovies)
    console.log(movies)
    if(!movies) return;
    const mainMovie = movies[Math.floor(Math.random() * movies.length)];
    // const mainMovie = movies[0];
    // if(!mainMovie) return;
    console.log(mainMovie)
    useGetSpecificMovieVideos(mainMovie?.id);
  return (
    <div className='relative w-full h-screen overflow-hidden'>
        <VideoTitle videoTitle={mainMovie?.original_title} overview={mainMovie?.overview} videoId = {mainMovie?.id}/>
        <Videobackground isWatchPage={false} />
    </div>
  )
}

export default MainContainer