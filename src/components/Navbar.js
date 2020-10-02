import React, {useContext} from 'react';
import { MovieContext } from '../contexts/MovieContext';

const Navbar = (props) => {
    const {movies} = useContext(MovieContext);
    return (
    <div className='navbar'>
        <h1>Watchlist</h1>
        <p>There are {movies.length} movies/series you should watch!</p>
    </div>);
}
 
export default Navbar;
