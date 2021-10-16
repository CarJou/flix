import React, { useState } from 'react';
import NavAddMobile from '../Navbar/NavAddMobile';
import Form from './Form';

import MovieProvider from '../context/movieContext';

const AddMovie = () => {
  return (
    <MovieProvider>
      <NavAddMobile />
      <Form />
    </MovieProvider>
  );
};
export default AddMovie;
