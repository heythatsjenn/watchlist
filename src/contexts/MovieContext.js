import React , {createContext, useState, useReducer} from 'react';
import MovieReducer from '../reducers/MovieReducer'

export const MovieContext = createContext();

const MovieContextProvider = (props) => {
    const[movies, dispatch] = useReducer(MovieReducer, [
        {title: 'Clueless', year: 1995, genre: 'Romance', key:'1'},
        {title: 'Ant-Man', year: 2015, genre: 'Action', key:'2'},
        {title: 'Fresh Prince of Bel Air', year: 1990, genre: 'Comedy', key:'3'},
        {title: 'The Breakfast Club', year: 1985, genre:'Teen', key:'4'}])

    const [ligado, setligado] = useState(true)

    return ( 
        <MovieContext.Provider value={{movies, dispatch, ligado, setligado}}>
            {props.children}
        </MovieContext.Provider>
     );
}
 
export default MovieContextProvider;