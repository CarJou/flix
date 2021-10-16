import React, { useReducer } from 'react';
import movieContext from './movieContext';
import movieReducer from './movieReducer';

const MovieState = (props) => {
  const initialState = {
    createMovie: false,
  };

  const [state, dispatch] = useReducer(movieReducer, initialState);

  //funciones para el form
  return (
    <movieContext.Provider value={{ createMovie: state.createMovie }}>
      {props.children}
    </movieContext.Provider>
  );
};
export default MovieState;
