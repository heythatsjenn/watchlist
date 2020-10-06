import React , {createContext, useState, useEffect, useReducer} from 'react';
import MovieReducer from '../reducers/MovieReducer'

export const MovieContext = createContext();

const MovieContextProvider = (props) => {
    const[movies, dispatch] = useReducer(MovieReducer, [], ()=>{
        const localMovies = localStorage.getItem('movies');
        return localMovies ? JSON.parse(localMovies) : []
    })

    useEffect(()=>{
        localStorage.setItem('movies', JSON.stringify(movies))
    },[movies])

    return ( 
        <MovieContext.Provider value={{movies, dispatch}}>
            {props.children}
        </MovieContext.Provider>
     );
}
 
export default MovieContextProvider;