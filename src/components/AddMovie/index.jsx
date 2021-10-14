import React, { useState } from 'react';
import NavAddMobile from '../Navbar/NavAddMobile';
import Form from './Form';

const AddMovie = () => {
  const [createMovies, setCreateMovies] = useState([]);

  const createMovie = (addMovie) => {
    setCreateMovies([...createMovies, addMovie]);
  };

  return (
    <>
      <NavAddMobile />
      <Form createMovie={createMovie} />
    </>
  );
};
export default AddMovie;
