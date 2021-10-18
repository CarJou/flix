import { GET_MOVIES, ADD_MOVIE } from '../../types';

export default (state, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };

    case ADD_MOVIE:
      return {
        ...state,
        movies: [...state.movies, action.payload],
        createMovie: [...state.createMovie, action.payload],
      };

    default:
      return state;
  }
};
