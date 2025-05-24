import React from 'react'
import MoviesList from './MoviesList'

export const SecondaryContainer = () => {
  return (
    <div className='w-full'>
      <MoviesList category={"Now Playing"}/>
    </div>
  )
}
