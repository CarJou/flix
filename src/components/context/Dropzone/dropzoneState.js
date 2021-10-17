import React, { useReducer } from 'react';
import DropzoneContext from './dropzoneContext';
import dropzoneReducer from './dropzoneReducer';

import { CLEAR_ALERT, SHOW_ALERT } from '../../types';

const DropzoneState = ({ children }) => {
  const initialState = {
    msg_file: null,
  };
  //creo dispatch y state
  const [state, dispatch] = useReducer(dropzoneReducer, initialState);

  const showAlert = (msg) => {
    console.log(msg);
    dispatch({ type: SHOW_ALERT, payload: msg });

    setTimeout(() => {
      dispatch({
        type: CLEAR_ALERT,
      });
    }, 3000);
  };

  return (
    <DropzoneContext.Provider value={{ showAlert, msg_file: state.msg_file }}>
      {children}
    </DropzoneContext.Provider>
  );
};
export default DropzoneState;
