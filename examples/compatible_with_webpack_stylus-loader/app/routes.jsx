import React from 'react';
import {Route} from 'react-router';

import Main from './components/Main.jsx';
import Example from './components/example/Example.jsx';

const routes = (
    <Route handler={Main}>
        <Route name="example" handler={Example}></Route>
    </Route>
);

export default routes;