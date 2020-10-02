import React, {useContext} from 'react';
import {MovieContext} from '../contexts/MovieContext';

const MovieDetails = ({movie}) => {
    const {removeMovie} = useContext(MovieContext);
    return ( 
        <li>
            <p onClick={removeMovie.bind(this, movie.key)} className='title'>{movie.title}</p>
            <p onClick={() =>removeMovie(movie.key)} className='genre'>{movie.genre}</p>
            <p onClick={() =>removeMovie(movie.key)} className='year'>{movie.year}</p>
        </li>
     );
    }
 
export default MovieDetails;
