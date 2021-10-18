import React, { useCallback, useContext } from 'react';
import Fill from '../../assets/icons/fill.png';
import { useDropzone } from 'react-dropzone';
import DropzoneContext from '../context/Dropzone/dropzoneContext';
import MsgAlert from './MsgAlert';

const Dropzone = () => {
  const dropzoneContext = useContext(DropzoneContext);

  const { showAlert, msg_file, uploadFile } = dropzoneContext;

  const onDropRejected = () => {
    showAlert('¡ERROR! No se pudo cargar la película, el límite es 1MB');
  };

  //para que no reenderice en loop usamos usecallback
  //mejora la perfo
  const onDropAccepted = useCallback((acceptedFiles) => {
    console.log(acceptedFiles[0].path);

    uploadFile(acceptedFiles[0].path);
  }, []);

  //extraigo contenido de dropzone
  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({ onDropAccepted, onDropRejected, maxSize: 1000000 });

  const files = acceptedFiles.map((file) => (
    <li key={file.lastModified} className="file-dropzone">
      {file.path} {(file.size / Math.pow(1024, 2)).toFixed(2)}MB
    </li>
  ));

  return (
    <>
      {msg_file ? (
        <div className="container-error">
          <MsgAlert />
          <div {...getRootProps({ className: 'dropzone content-error' })}>
            <input className="drop-input" {...getInputProps()} />

            <button className="btn-dropzone" type="button">
              Reintentar
            </button>
          </div>
        </div>
      ) : (
        <div className="container-dropzone">
          <ul>{files}</ul>
          <div {...getRootProps({ className: 'dropzone' })}>
            <input className="drop-input" {...getInputProps()} />
            <div>
              {isDragActive ? (
                <p> Soltá el archivo </p>
              ) : (
                <button className="btn-dropzone" type="button">
                  <img src={Fill} alt="fill" /> Agregá un archivo
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Dropzone;
