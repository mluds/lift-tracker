import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import App from './App.jsx';
import Lifts from './Lifts.jsx';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="lifts" component={Lifts} />
      <Route path="splits" component={Lifts} />
    </Route>
  </Router>,
  document.getElementById('root')
);
