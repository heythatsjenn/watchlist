import React, {useState, useContext} from 'react';
import {MovieContext} from '../contexts/MovieContext';
import EditMovieForm from './EditMovieForm';

const MovieDetails = ({movie}) => {
    const [isEditing, setIsEditing] = useState(false);

    const {dispatch} = useContext(MovieContext);
    return ( 
        <li>
            <div className='movie'>
                <div className='movie-info'>
                    <p className='title'>{movie.title}</p>
                    <p className='genre'>{movie.genre}</p>
                    <p className='year'>{movie.year}</p>
                </div>
                <div className='movie-controls'>
                    <button onClick={dispatch.bind(this, {type: 'REMOVE_MOVIE', key: movie.key})}>Delete</button>
                    <button onClick={()=>setIsEditing(!isEditing)}>Edit</button>
                </div>
            </div>
            <div>
                {
                    
                    isEditing?<EditMovieForm movie={movie} isEditing={isEditing} setIsEditing={setIsEditing}/>:''
                }
            </div>
        </li>
     );
    }
 
export default MovieDetails;
