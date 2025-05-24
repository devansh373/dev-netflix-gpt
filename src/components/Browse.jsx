import React, { useEffect } from 'react'
import Header from './Header'
import { TMDB_Api_Options } from '../utils/constants'

const Browse = () => {
  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/now_playing?page=1",TMDB_Api_Options)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
  
   
  }, [])
  
  return (
    <div>
      <Header/>
    </div>
  )
}

export default Browse