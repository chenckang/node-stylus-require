/*-------------------------------------------------------------------------------------------------------------------*\
|  Copyright (C) 2015 PayPal                                                                                          |
|                                                                                                                     |
|  Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance     |
|  with the License.                                                                                                  |
|                                                                                                                     |
|  You may obtain a copy of the License at                                                                            |
|                                                                                                                     |
|       http://www.apache.org/licenses/LICENSE-2.0                                                                    |
|                                                                                                                     |
|  Unless required by applicable law or agreed to in writing, software distributed under the License is distributed   |
|  on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for  |
|  the specific language governing permissions and limitations under the License.                                     |
\*-------------------------------------------------------------------------------------------------------------------*/

'use strict';

// import react and react-router
var React = require('react');
var Router = require('react-router');

var Layout = require('./views/layout.jsx');
var ListPage = require('./views/list/List.jsx');
var DetailPage = require('./views/detail/Detail.jsx');

var routes = module.exports = (
  <Router.Route path='/' handler={Layout}>
    <Router.DefaultRoute name='list' handler={ListPage} />
    <Router.Route name='detail' path='/:id' handler={DetailPage} />
  </Router.Route>
);
