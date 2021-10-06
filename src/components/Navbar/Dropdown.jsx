import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = () => {
  return (
    <>
      <nav className="container-drop">
        <ul className="list-container">
          <Link to="/" className="link-to">
            <li className="list-style">POPULARES</li>
          </Link>
          <Link to="/" className="link-to">
            <li className="list-style">MIS PELICULAS</li>
          </Link>
        </ul>
      </nav>
    </>
  );
};
export default Dropdown;
