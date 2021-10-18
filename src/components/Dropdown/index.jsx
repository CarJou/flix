import React from 'react';

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
    </div>
  );
};
export default Dropdown;
