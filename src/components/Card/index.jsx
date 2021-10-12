import React, { useState, useEffect } from 'react';
import axios from 'axios';

//import play from '../../assets/icons/play.png';

const Card = ({ fetchUrl, imgUrl }) => {
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
              alt={movie.name}
              onClick={() => handleClick(movie)}
              key={movie.id}
              className="img-card"
            />
            <h1>{movie.title}</h1>
          </div>
        ))}
    </div>
  );
};
export default Card;
