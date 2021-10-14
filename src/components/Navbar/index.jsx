import React from 'react';

import Burger from './Burger';
import UserButton from './UserButton';

import Notificacion from '../../assets/icons/notificacion.png';
import BtnAddMobile from './BtnAddMobile';
import BtnAddDesktop from './BtnAddDesktop';
import Slide from 'react-reveal/Slide';

const Navbar = () => {
  return (
    <Slide top>
      <div className="nav-container">
        <div className="nav-content">
          <BtnAddMobile />
          <div className="nav-desktop-container">
            <h1 className="nav-title">
              <span className="bold-text">LITE</span>
              FLIX
            </h1>
            <BtnAddDesktop />
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
    </Slide>
  );
};
export default Navbar;
