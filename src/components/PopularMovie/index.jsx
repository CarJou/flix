import React, { useContext } from 'react';
import ApiContext from '../context/Api/ApiContext';
import star from '../../assets/icons/star.png';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

const PopularMovie = ({ imgUrl }) => {
  const { popularMovie } = useContext(ApiContext);

  return (
    <div className="card-container">
      {popularMovie &&
        popularMovie.map((movie) => (
          <Zoom key={movie.id}>
            <div className="card-content">
              <img
                src={`${imgUrl}${movie.backdrop_path}`}
                alt={movie.title}
                key={movie.id}
                className="img-card"
              />{' '}
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
                      <img
                        src={star}
                        alt={movie.vote_average}
                        className="svg-star"
                      />
                      {movie.vote_average}
                    </h1>
                    <h1 className="card-date">
                      {movie.release_date.substring(0, 4)}
                    </h1>
                  </div>
                </Fade>
              </div>
            </div>
          </Zoom>
        ))}
    </div>
  );
};
export default PopularMovie;
