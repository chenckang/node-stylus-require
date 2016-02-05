import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import createHashHistory from 'history/lib/createHashHistory';

import Main from './components/Main.jsx';
import Example from './components/example/Example.jsx';

const routes = (
    <Router history={createHashHistory()}>
      <Route path="/" component={Main}>
          <IndexRoute component={Example}/>
          <Route ref="example" path="example" component={Example}></Route>
      </Route>
    </Router>
);

export default routes;