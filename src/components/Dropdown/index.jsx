import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = () => {
  return (
    <div className="drop-container">
      <label for="movie" className="label-drop">
        VER:
      </label>
      <select name="movie">
        <option value="popular">POPULARES</option>
        <option value="my movie">MIS PELICULAS</option>
      </select>
      {/*
      <nav className="container-drop">
        <ul className="list-container">
          <Link to="/" className="link-to">
            <li className="list-style">POPULARES</li>
          </Link>
          <Link to="/" className="link-to">
            <li className="list-style">MIS PELICULAS</li>
          </Link>
        </ul>
      </nav> */}
    </div>
  );
};
export default Dropdown;
