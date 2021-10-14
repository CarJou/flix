import React from 'react';

import { Link } from 'react-router-dom';

import Plus from '../../assets/icons/plus.png';

const BtnAddDesktop = () => {
  return (
    <Link to="add_movie" className="link-to">
      <button className="btn-add-desktop">
        <img src={Plus} alt="add film" className="img-add-desktop" />
        Agregar película
      </button>
    </Link>
  );
};
export default BtnAddDesktop;
