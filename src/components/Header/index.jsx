import React from 'react';
import Navbar from '../Navbar';
import play from '../../assets/icons/play.png';
import plus from '../../assets/icons/plus.png';
const Header = () => {
  return (
    <header className="container">
      <Navbar />
      <div className="header-content">
        <h1 className="title-header">
          ORIGINAL DE <span className="bold-text">LITEFLIX</span>
        </h1>
        <h2 className="title-movie">la casa de papel</h2>

        <div className="container-btn-header">
          <button className="btn-play">
            <img src={play} alt="button play" /> Reproducir
          </button>
          <button className="btn-list">
            <img src={plus} alt="button my list" /> Mi lista
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;
