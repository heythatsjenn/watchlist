import React , {createContext, useState} from 'react';
import {v4} from 'uuid';

export const MovieContext = createContext();

const MovieContextProvider = (props) => {
    const [movies, setMovies] = useState([
        {title: 'Clueless', year: 1995, genre: 'Romance', key:'1'},
        {title: 'Ant-Man', year: 2015, genre: 'Action', key:'2'},
        {title: 'Fresh Prince of Bel Air', year: 1990, genre: 'Comedy', key:'3'},
        {title: 'The Breakfast Club', year: 1985, genre:'Teen', key:'4'}]);

    const addMovie = (title, year, genre) =>{
        setMovies([...movies, {title, year, genre, key:v4()}])
    }
    const removeMovie = (key) =>{
        setMovies(movies.filter(movie => movie.key !== key))
    }
    return ( 
        <MovieContext.Provider value={{movies, addMovie, removeMovie}}>
            {props.children}
        </MovieContext.Provider>
     );
}
 
export default MovieContextProvider;