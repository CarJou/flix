import React from 'react';
import Card from '../components/Card';
import Header from '../components/Header';
import api from '../api';

const Home = () => {
  return (
    <>
      <Header fetchUrl={api.NOW_PLAYING} />
      <Card fetchUrl={api.POPULAR_URL} />
    </>
  );
};
export default Home;
