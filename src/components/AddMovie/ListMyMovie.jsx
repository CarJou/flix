import React, { useContext } from 'react';
import MyMovie from './MyMovie';
import MovieContext from '../context/Movies/movieContext';

const ListMyMovie = () => {
  //traer peliculas de initialState
  const moviesContext = useContext(MovieContext);
  const { createMovie } = moviesContext;

  return (
    <>
      <h1 className="mymovie-title">Mis películas</h1>
      <div className="card-movie-container">
        {createMovie.map((movies) => (
          <MyMovie movie={movies} key={movies.id} />
        ))}
      </div>
    </>
  );
};
export default ListMyMovie;
