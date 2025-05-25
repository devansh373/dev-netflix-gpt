import React from 'react'
import { TMDB_Image_Url } from '../utils/constants'

const MovieCard = ({title,movie}) => {

  return (
    <div className=' min-w-[200px]  h-[380px]  rounded-lg shadow-lg  flex flex-col items-center justify-between  hover:bg-gray-700 transition-all duration-300 cursor-pointer overflow-hidden'>
       
        <img className='w-full aspect-auto rounded-lg hover:scale-[1.1] transition-all duration-300 ' src={`${TMDB_Image_Url}${movie}`} alt={title} />
         <h1 className='p-2 text-white text-center flex items-center justify-center'>{title}</h1>
        {/* <img src={`https://image.tmdb.org/t/p/original/${movie}`} alt={title} /> */}
        {/* <p>{overview}</p> */}
        {/* <p>Release Date: {release_date}</p> */}
        {/* <p>Rating: {vote_average}</p> */}
    </div>
  )
}

export default MovieCard