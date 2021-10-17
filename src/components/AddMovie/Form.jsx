import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MovieContext from '../context/Movies/movieContext';
import Dropzone from '../Dropzone';

const Form = () => {
  //obtener state del form
  const moviesContext = useContext(MovieContext);
  const { movies, addMovie, initialMovies } = moviesContext;

  useEffect(() => {
    if (initialMovies) {
      localStorage.setItem('movies', JSON.stringify(movies));
    } else {
      localStorage.setItem('movies', JSON.stringify([]));
    }
  }, [movies]);

  const [movie, setMovie] = useState({
    title: '',
  });
  const [error, setError] = useState(false);

  //cuando el usuario escribe en el input
  const handleChange = (e) => {
    setMovie({
      ...movie,
      [e.target.name]: e.target.value,
    });
  };
  //extraigo valor
  const { title } = movie;

  //add movie
  const submitForm = (e) => {
    e.preventDefault();
    if (title === '') {
      setError(true);
      return;
    }

    addMovie(movie);
    setError(false);

    //reinciar el form
    setMovie({
      title: '',
    });
  };

  return (
    <>
      <div className="add-movie-container">
        <h1 className="title-add-movie">Agregar película</h1>
        <Dropzone />
        <form className="form-content" onSubmit={submitForm}>
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
            className="input-text"
            placeholder="Título"
          />
          {error ? (
            <span className="form-error">¡Incluya un título!</span>
          ) : null}
          <div className="btn-form-container">
            <button type="submit" className="btn-add">
              subir película
            </button>
            <Link to="/">
              <button className="btn-next">salir</button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};
export default Form;
