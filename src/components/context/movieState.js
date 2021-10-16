import React, { useReducer } from 'react';
import movieContext from './movieContext';
import movieReducer from './movieReducer';
import { v4 as uuid } from 'uuid';
import { GET_MOVIES, ADD_MOVIE } from '../types';

const MovieState = (props) => {
  const movies = [
    { id: 1, title: 'Harry Potter' },
    { id: 2, title: 'Bob Esponja' },
  ];

  //localstorage
  //convierto array en string
  let initialMovies = JSON.parse(localStorage.getItem('movies'));
  if (!initialMovies) {
    initialMovies = [];
  }

  const initialState = {
    movies: [initialMovies],
    createMovie: false,
  };

  //ejecutar acciones
  const [state, dispatch] = useReducer(movieReducer, initialState);

  //funciones para el form

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
    <movieContext.Provider
      value={{
        movies: state.movies,
        createMovie: state.createMovie,
        getMovies,
        addMovie,
        initialMovies,
      }}
    >
      {props.children}
    </movieContext.Provider>
  );
};
export default MovieState;
