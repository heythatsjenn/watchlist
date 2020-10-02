import React , {createContext, useState} from 'react';
import {v4} from 'uuid';

export const MovieContext = createContext();

const MovieContextProvider = (props) => {
    const [movies, setMovies] = useState([
        {title: 'Clueless', year: 1995, genre: 'Romance', id:'1'},
        {title: 'Ant-Man', year: 2015, genre: 'Action', id:'2'},
        {title: 'Fresh Prince of Bel Air', year: 2015, genre: 'Comedy', id:'3'}]);

    const addMovie = (title, year, genre) =>{
        setMovies([...movies, {title, year, genre, id:v4()}])
    }
    const removeMovie = (id) =>{
        setMovies(movies.filter(movie => movie.id !== id))
    }
    return ( 
        <MovieContext.Provider value={{movies, addMovie, removeMovie}}>
            {props.children}
        </MovieContext.Provider>
     );
}
 
export default MovieContextProvider;