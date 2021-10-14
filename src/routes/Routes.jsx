import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AddMovie from '../components/AddMovie';
import Home from '../pages/Home';

function Routes() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/add_movie" component={AddMovie} />
    </Router>
  );
}
export default Routes;
