import React, { useState, useEffect } from 'react';
import axios from 'axios';

import star from '../../assets/icons/star.png';
import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect
import Fade from 'react-reveal/Fade';
import Dropdown from '../Dropdown';

const PopularMovie = ({ fetchUrl, imgUrl }) => {
  const [popularMovie, setPopularMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${fetchUrl}`);
      setPopularMovie(response.data.results.slice(0, 4));
      return response;
    };

    fetchData();
  }, []);

  //console.log('popular movies', popularMovie);
  const handleClick = () => {};

  return (
    <div className="card-container">
      <Dropdown />
      {popularMovie &&
        popularMovie.map((movie) => (
          <Zoom>
            <div className="card-content" key={movie.id}>
              <img
                src={`${imgUrl}${movie.backdrop_path}`}
                alt={movie.title}
                onClick={() => handleClick(movie)}
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
