import React, { useEffect, useContext } from 'react';
import MyMovie from './MyMovie';
import MovieContext from '../context/Movies/movieContext';

const ListMyMovie = () => {
  //traer peliculas de initialState
  const moviesContext = useContext(MovieContext);
  const { movies, getMovies } = moviesContext;

  useEffect(() => {
    getMovies();
  }, []);

  if (movies.length === 0) return null;

  return (
    <>
      {movies.map((movie) => (
        <MyMovie key={movie.id} movie={movie} />
      ))}
    </>
  );
};
export default ListMyMovie;
