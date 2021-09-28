import React from 'react';
import Navbar from './Navbar';
import { Switch, Router, Route } from 'react-router';
import Homepage from './Homepage';
import About from './About';
import SinglePage from './SinglePage';
import Search from './Search';

export default function Main() {
  return (
    <div>
      <div className="container"></div>
      <Switch>
        <Route path="/search" component={Search} />
        <Route exact path="/" component={Homepage} />
        <Route exact path="/about" component={About} />
        <Route path="/singleshow/:id" component={SinglePage} />
      </Switch>
    </div>
  );
}
