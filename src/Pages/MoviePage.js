import React from 'react'
import { Card } from '../Components/Card'

export const MoviePage = (props) => {
  return (
    
    <>
        {props.movies.length===0? "No Movies yet": ""}
        {props.movies.map((movie)=>{
                return (
                  <Card movie={movie} key={movie.sno} />
                )
        })}
    </>
  )
}
