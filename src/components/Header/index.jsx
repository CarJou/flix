import React, { useState, useEffect } from 'react';
import play from '../../assets/icons/play.png';
import plus from '../../assets/icons/plus.png';
import axios from 'axios';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';

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
              <Fade left big>
                <h1 className="title-header">
                  ORIGINAL DE <span className="bold-text">LITEFLIX</span>
                </h1>
              </Fade>
              <Zoom>
                <h2 className="title-movie">{movie.title}</h2>
              </Zoom>
              <div className="container-btn-header">
                <Bounce left>
                  <button className="btn-play">
                    <img src={play} alt="button play" /> Reproducir
                  </button>
                </Bounce>
                <Bounce right>
                  <button className="btn-list">
                    <img src={plus} alt="button my list" /> Mi lista
                  </button>
                </Bounce>
              </div>
            </div>
          </div>
        ))}
    </header>
  );
};
export default Header;
