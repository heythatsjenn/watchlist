import React, {useContext, useState} from 'react';
import { MovieContext } from '../contexts/MovieContext';

const EditMovieForm = (props) => {
    const {dispatch} = useContext(MovieContext);
    const [title, setTitle] = useState(props.movie.title);
    const [genre, setGenre] = useState(props.movie.genre);
    const [year, setYear] = useState(props.movie.year);

    const handleEdit = (e) =>{
        e.preventDefault();
        dispatch({type:'EDIT_MOVIE', movie:{title, year, genre}, key:props.movie.key});
        props.setIsEditing(false);
        setTitle('');
        setYear('');
        setGenre('');
    }

    return ( 
    <form onSubmit={handleEdit}>
        <input type="text" placeholder='Title' value={title} onChange={(e)=>setTitle(e.target.value)} required/>
        <input type="text" placeholder='Genre' value={genre} onChange={(e)=>setGenre(e.target.value)}/>
        <input type="number" placeholder='Year' value={year} onChange={(e)=>setYear(e.target.value)}/>
        <button className="submit" type="submit">Update</button>
    </form> );
}
 
export default EditMovieForm;