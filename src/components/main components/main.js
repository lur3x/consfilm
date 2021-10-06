import React from 'react';
import { Switch, Router, Route } from 'react-router';
import About from './About';
import SinglePage from './SinglePage';
import SearchPage from './SearchPage';
import HomePage from './HomePage';
import Posts from './Posts';


export default function Main() {
  return (
    <div>
      <div className='container'></div>
      <Switch>
        <Route path='/search' component={SearchPage} />
        <Route path='/posts' component={Posts} />
        <Route exact path='/' component={HomePage} />
        <Route exact path='/about' component={About} />
        <Route path='/singleshow/:id' component={SinglePage} />
      </Switch>
    </div>
  );
}
