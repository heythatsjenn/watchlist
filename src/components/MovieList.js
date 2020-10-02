import React, {useContext} from 'react';
import {MovieContext} from '../contexts/MovieContext';
import MovieDetails from './MovieDetails'

const MovieList = () => {

    const {movies} = useContext(MovieContext)

    return movies.length? ( 
        <div className='movie-list'>
            <ul>
                {
                    movies.map(movie=> <MovieDetails movie={movie} key={movie.key}/>)
                }
            </ul>
        </div>
     ):(<p className='empty'>Are you sure you don't want to watch anything? :C</p>)
}
 
export default MovieList;