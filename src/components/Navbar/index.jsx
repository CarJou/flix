import React from 'react';

import Burger from './Burger';
import UserButton from './UserButton';

import Plus from '../../assets/icons/plus.png';
import Notificacion from '../../assets/icons/notificacion.png';

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="nav-content">
        {' '}
        <button className="btn-nav-add-mobile">
          <img src={Plus} alt="add film" className="img-add" />
        </button>
        <div className="nav-desktop-container">
          <h1 className="nav-title">
            <span className="bold-text">LITE</span>
            FLIX
          </h1>
          <button className="btn-add-desktop">
            <img src={Plus} alt="add film" className="img-add-desktop" />
            Agregar película
          </button>
        </div>
        <div className="nav-desktop-container">
          <Burger />
          <button className="btn-nav-not">
            <img src={Notificacion} alt="notification" />
          </button>
          <UserButton />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
