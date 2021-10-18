export const base64File = (file) => {
  return new Promise((res, rej) => {
    const fileReader = new FileReader();
    fileReader.readURL(file);

    fileReader.onload = () => {
      res(fileReader.result);
    };

    fileReader.onerror = (err) => {
      rej(err);
    };
  });
};
