import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Dropzone from 'react-dropzone';
import { v4 as uuid } from 'uuid';

const Form = ({ createMovie }) => {
  //peliculas en localstorage
  // const movieLocal = localStorage.getItem();
  const [addMovie, setAddMovie] = useState({
    title: '',
  });
  const [error, setError] = useState(false);

  //cuando el usuario escribe en el input
  const handleChange = (e) => {
    setAddMovie({
      ...addMovie,
      [e.target.name]: e.target.value,
    });
  };
  //extraigo valor
  const { title } = addMovie;

  //add movie
  const submitForm = (e) => {
    e.preventDefault();

    if (title.trim() === '') {
      setError(true);
      return;
    }
    setError(false);

    addMovie.id = uuid();

    //create movie
    createMovie(addMovie);

    //reinciar el form
    setAddMovie({
      title: '',
    });
  };

  return (
    <>
      <div className="add-movie-container">
        <h1 className="title-add-movie">Agregar película</h1>

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
