import React, { useState } from 'react';
import Stranger from '../../assets/images/card.png';
import Fade from 'react-reveal/Fade';
import star from '../../assets/icons/star.png';

const MyMovie = ({ movie }) => {
  return (
    <>
      <div className="card-container">
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
              <div className="card-info">
                <h1 className="card-star">
                  <img src={star} alt="prueba" className="svg-star" />
                </h1>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
};
export default MyMovie;
