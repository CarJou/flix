import React, { useState } from 'react';
import NavAddMobile from '../Navbar/NavAddMobile';
import Form from './Form';
import ListMyMovie from './ListMyMovie';

const AddMovie = () => {
  return (
    <>
      <NavAddMobile />
      <Form />
      <ListMyMovie />
    </>
  );
};
export default AddMovie;
