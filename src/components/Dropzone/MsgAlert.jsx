import React, { useContext } from 'react';
import DropzoneContext from '../context/Dropzone/dropzoneContext';

const MsgAlert = () => {
  const dropzoneContext = useContext(DropzoneContext);

  const { msg_file } = dropzoneContext;

  return (
    <>
      <p className="error-file">{msg_file}</p>
    </>
  );
};
export default MsgAlert;
