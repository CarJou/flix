import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const Dropzone = () => {
  //para que no reenderice en loop usamos usecallback
  //mejora la perfo
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
  });
  //extraigo contenido de dropzone
  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({ onDrop });

  const files = acceptedFiles.map((file) => (
    <li key={file.lastModified}>
      <p>{file.path}</p>
    </li>
  ));

  return (
    <div className="container-dropzone">
      <ul>{files}</ul>
      <div {...getRootProps({ className: 'dropzone' })}>
        <input className="drop-input" {...getInputProps()} />
        <div>
          {isDragActive ? (
            <p> Soltá el archivo </p>
          ) : (
            <button>Agregá un archivo</button>
          )}
        </div>
      </div>
    </div>
  );
};
export default Dropzone;
