import React, {useContext, useState} from 'react';
import { MovieContext } from '../contexts/MovieContext';

const NewMovieForm = () => {
    const {addMovie} = useContext(MovieContext);
    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState('');
    const [year, setYear] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        addMovie(title, year, genre);
        setTitle('');
        setYear('');
        setGenre('');
    }

    return ( 
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Title' value={title} onChange={(e)=>setTitle(e.target.value)} required/>
        <input type="text" placeholder='Genre' value={genre} onChange={(e)=>setGenre(e.target.value)}/>
        <input type="number" placeholder='Year' value={year} onChange={(e)=>setYear(e.target.value)}/>
        <button className="submit" type="submit">Add</button>
    </form> );
}
 
export default NewMovieForm;