import React from 'react';

import { Link } from 'react-router-dom';

import Plus from '../../assets/icons/plus.png';

const BtnAddMobile = () => {
  return (
    <Link to="add_movie" className="link-to-mobile">
      <button className="btn-nav-add-mobile">
        <img src={Plus} alt="add film" className="img-add" />
      </button>
    </Link>
  );
};
export default BtnAddMobile;
