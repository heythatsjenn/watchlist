import React from 'react';
import Navbar from './components/Navbar';
import MovieContextProvider from './contexts/MovieContext';


function App() {
  return (
    <div className="App">
      <MovieContextProvider>
        <Navbar />
      </MovieContextProvider>
    </div>
  );
}

export default App;
