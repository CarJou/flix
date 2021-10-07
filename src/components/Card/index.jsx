import React, { useState, useEffect } from 'react';
import axios from 'axios';

//import play from '../../assets/icons/play.png';

const img_url = 'https://image.tmdb.org/t/p/original';

const Card = ({ fetchUrl }) => {
  console.log(fetchUrl);
  const [popularMovie, setPopularMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${fetchUrl}`);
      setPopularMovie(response.data.results);
      return response;
    };
    fetchData();
  }, []);

  //console.log('popular movies', popularMovie);
  const handleClick = () => {};

  return (
    <div className="card-container">
      <div className="card-content">
        {popularMovie &&
          popularMovie.map((movie) => (
            <>
              <img
                src={`${img_url}${movie.backdrop_path}`}
                alt={movie.name}
                onClick={() => handleClick(movie)}
                key={movie.id}
                className="img-card"
              />
              <h1>{movie.title}</h1>
            </>
          ))}
      </div>
    </div>
  );
};
export default Card;
