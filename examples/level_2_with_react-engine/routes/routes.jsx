import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import Layout from '../view/Layout.jsx';
import Sample from '../view/Sample.jsx';

var routes = module.exports = (
  <Router>
    <Route path='/' component={Layout}>
      <IndexRoute component={Sample} />
      <Route path='/sample' component={Sample}/>
    </Route>
  </Router>
)
