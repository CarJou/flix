import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PopularMovie from '../components/PopularMovie';
import Home from '../pages/Home';

function Routes() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/popular_movie" component={PopularMovie} />
    </Router>
  );
}
export default Routes;
