import React, { useState, useEffect } from 'react';
import play from '../../assets/icons/play.png';
import plus from '../../assets/icons/plus.png';
import axios from 'axios';

const Header = ({ fetchUrl, imgUrl }) => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${fetchUrl}`);
      setTrending(response.data.results.slice(0, 1));
      return response;
    };
    fetchData();
  }, []);
  console.log('trending', trending);

  return (
    <header className="container">
      {trending &&
        trending.map((movie) => (
          <div className="header-content" key={movie.id}>
            <img
              src={`${imgUrl}${movie.backdrop_path}`}
              alt={movie.title}
              key={movie.id}
              className="img_fullscreen"
            />
            <div className="movie_content">
              <h1 className="title-header">
                ORIGINAL DE <span className="bold-text">LITEFLIX</span>
              </h1>
              <h2 className="title-movie">{movie.title}</h2>

              <div className="container-btn-header">
                <button className="btn-play">
                  <img src={play} alt="button play" /> Reproducir
                </button>
                <button className="btn-list">
                  <img src={plus} alt="button my list" /> Mi lista
                </button>
              </div>
            </div>
          </div>
        ))}
    </header>
  );
};
export default Header;
