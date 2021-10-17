import React, { useState, useEffect } from 'react';
import ApiContext from './ApiContext';
import axios from 'axios';

const ApiState = ({ children, fetchUrl }) => {
  const [popularMovie, setPopularMovie] = useState([]);
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${fetchUrl}`);
      setPopularMovie(response.data.results.slice(0, 4));
      return response;
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${fetchUrl}`);
      setTrending(response.data.results.slice(0, 1));
      return response;
    };
    fetchData();
  }, []);

  return (
    <ApiContext.Provider value={{ popularMovie, trending }}>
      {children}
    </ApiContext.Provider>
  );
};
export default ApiState;
