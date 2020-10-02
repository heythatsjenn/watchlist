import React from 'react';
import MovieList from './components/MovieList';
import Navbar from './components/Navbar';
import NewMovieForm from './components/NewMovieForm';
import MovieContextProvider from './contexts/MovieContext';


function App() {
  return (
    <div className="App">
      <MovieContextProvider>
        <Navbar />
        <MovieList />
        <NewMovieForm />
      </MovieContextProvider>
    </div>
  );
}

export default App;
