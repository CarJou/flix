import React from 'react';
import Stranger from '../../assets/images/card.png';
import Fade from 'react-reveal/Fade';

const MyMovie = ({ movie }) => {
  return (
    <>
      <div className="card-content">
        <img src={Stranger} alt="prueba" className="img-card" />
        <div className="card-content-info">
          <Fade left>
            <div className="card-header-info">
              <button className="button-card"></button>
              <h1 className="card-title">{movie.title}</h1>
            </div>
          </Fade>
          <Fade right>
            <div className="card-info"></div>
          </Fade>
        </div>
      </div>
    </>
  );
};
export default MyMovie;
