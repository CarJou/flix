import React, { useReducer } from 'react';
import DropzoneContext from './dropzoneContext';
import dropzoneReducer from './dropzoneReducer';

import { CLEAR_ALERT, SHOW_ALERT, UPLOAD_FILE } from '../../types';

const DropzoneState = ({ children }) => {
  const initialState = {
    msg_file: null,
    name: '',
    name_original: '',
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

  const uploadFile = (nameFile) => {
    dispatch({
      type: UPLOAD_FILE,
      payload: {
        name_original: nameFile,
      },
    });
  };

  return (
    <DropzoneContext.Provider
      value={{
        uploadFile,
        name_original: state.name_original,
        showAlert,
        msg_file: state.msg_file,
      }}
    >
      {children}
    </DropzoneContext.Provider>
  );
};
export default DropzoneState;
