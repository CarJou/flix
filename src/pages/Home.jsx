import React from 'react';
import Card from '../components/Card';
import Header from '../components/Header';
import api from '../api';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <>
      <Navbar />
      <Header fetchUrl={api.NOW_PLAYING} imgUrl={api.IMAGE_URL} />
      <Card fetchUrl={api.POPULAR_URL} imgUrl={api.IMAGE_URL} />
    </>
  );
};
export default Home;
