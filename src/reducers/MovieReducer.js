import {v4} from 'uuid';

const MovieReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_MOVIE':{
            return([...state , 
                {title: action.movie.title, 
                 year: action.movie.year, 
                 genre: action.movie.genre,
                 key: v4()
                }]);
        }
        case 'REMOVE_MOVIE':{
            return state.filter(movie => movie.key !== action.key)
        }
        case 'EDIT_MOVIE':{
            return(state.map(movie=>{
                if(movie.key == action.key){
                    var newMovie={};
                    newMovie.title = action.movie.title;
                    newMovie.year = action.movie.year;
                    newMovie.genre = action.movie.genre;
                    newMovie.key = action.key;
                    console.log(newMovie)
                    return newMovie;
                }
                else {
                    return movie;
                }
            }));
        }  
        default:
            return state;
    }
}

export default MovieReducer