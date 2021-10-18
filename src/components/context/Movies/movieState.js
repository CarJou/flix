import React, { useReducer, useEffect } from 'react';
import MovieContext from './movieContext';
import movieReducer from './movieReducer';
import { v4 as uuid } from 'uuid';
import { GET_MOVIES, ADD_MOVIE } from '../../types';

const MovieState = (props) => {
  const movies = [];

  const initialState = {
    movies: localStorage.getItem('movies')
      ? JSON.parse(localStorage.getItem('movies'))
      : [],
    createMovie: localStorage.getItem('createMovie')
      ? JSON.parse(localStorage.getItem('createMovie'))
      : [],
  };

  //ejecutar acciones
  const [state, dispatch] = useReducer(movieReducer, initialState);

  useEffect(() => {
    localStorage.setItem('movies', JSON.stringify(state.movies));
    localStorage.setItem('createMovie', JSON.stringify(state.createMovie));
  }, [state]);

  //obtengo peliculas
  const getMovies = () => {
    dispatch({ type: GET_MOVIES, payload: movies });
  };

  //agrego peliculas
  const addMovie = (movie) => {
    movie.id = uuid();
    //inserto pelicula en el state
    dispatch({
      type: ADD_MOVIE,
      payload: movie,
    });
  };

  return (
    <MovieContext.Provider
      value={{
        movies: state.movies,
        createMovie: state.createMovie,
        getMovies,
        addMovie,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};
export default MovieState;
