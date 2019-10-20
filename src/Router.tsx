import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';

export default () => (
  <Router basename='/amour/'>
    <Switch>
      <Route exact path='*' component={App} />
    </Switch>
  </Router>
);
