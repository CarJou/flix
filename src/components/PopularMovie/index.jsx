import React, { useState, useEffect } from 'react';
import axios from 'axios';

import play from '../../assets/icons/play.png';
import star from '../../assets/icons/star.png';

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
      {popularMovie &&
        popularMovie.map((movie) => (
          <div className="card-content" key={movie.id}>
            <img
              src={`${imgUrl}${movie.backdrop_path}`}
              alt={movie.title}
              onClick={() => handleClick(movie)}
              key={movie.id}
              className="img-card"
            />{' '}
            <div className="card-info">
              <button className="button-card"></button>

              <h1 className="card-title">{movie.title}</h1>
              <h1 className="card-star">
                <img src={star} alt={movie.vote_average} />
                {movie.vote_average}
              </h1>
              <h1 className="card-date">
                {movie.release_date.substring(0, 4)}
              </h1>
            </div>
          </div>
        ))}
    </div>
  );
};
export default PopularMovie;
