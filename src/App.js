import React, { useState, useEffect } from 'react';

import Header from './Component/Header';
import Search from './Component/Search';
import Movie from './Component/Movie';

import './App.css';

const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=4a3b711b"; 

const App = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    fetch(MOVIE_API_URL)
      .then(response => response.json())
      .then(jsonResponse => {
        setMovies(jsonResponse.Search);
        setLoading(false);
      });
  }, []);


  const search = searchValue => {
    setLoading(true);
    setErrorMessage(null);

    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
    .then(res => res.json())
    .then(jsonResponse => {
      if(jsonResponse.Response === "True") {
        setMovies(jsonResponse.Search);
        setLoading(false)
      } else {
        setErrorMessage(jsonResponse.Error);
        setLoading(false)
      }
    });
  };

  return(
    <div className="App">
      <Header text="Movies Hook" />
      <Search search = {search} />

      <p className="App-intro">Sharing a few of our favourite movies</p>

      <div className="movies">
        {loading && !errorMessage ? (
          <span>Loading...</span>
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          movies.map((movie, index) => (
            <Movie key={`${index} - ${movie.Title}`} movie={movie} />
          ))
        )}


        {loading && !errorMessage ? (
         <span>loading...</span>
         ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          movies.map((movie, index) => (
            <Movie key={`${index}-${movie.Title}`} movie={movie} />
          ))
        )}
      </div>
    </div>
  )
}

export default App;
