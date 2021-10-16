import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({ history }) => {
  function handleOnClick() {
    history.push('/');
  }
  return (
    <div className="drop-container">
      <label className="label-drop">VER:</label>
      <select name="movie">
        <option value="popular" onClick={handleOnClick}>
          POPULARES
        </option>
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
</nav>     */}
    </div>
  );
};
export default Dropdown;
