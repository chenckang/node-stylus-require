
'use strict';

import React from 'react';
import { Router, Route, IndexRoute, Redirect } from 'react-router';

import Layout from './layout.test.jsx';
import ListPage from '../public/views/list/List.jsx';
import DetailPage from '../public/views/detail/Detail.jsx';
import { hashHistory } from 'react-router';

var routes = module.exports = (
  <Router history={hashHistory}>
    <Route path='/' component={Layout} >
      <IndexRoute component={ListPage} />
      <Route path='/movie/:id' component={DetailPage} />
      <Redirect from='/gohome' to='/' />
    </Route>
  </Router>
);
