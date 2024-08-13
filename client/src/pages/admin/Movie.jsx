import React from 'react'
import MovieList from '../../components/MovieList'

export default function Movie() {
  return (
    <div className='px-4 py-4 grid xl:grid-cols-5 lg:grid-cols-2 mx-auto justify-items-center gap-y-8'>
      <MovieList/>
      <MovieList/>
      <MovieList/>
      <MovieList/>
      <MovieList/>
      <MovieList/>
      <MovieList/>
      <MovieList/>
    </div>
  )
}
