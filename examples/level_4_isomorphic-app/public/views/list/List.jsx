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

var React = require('react');
var Router = require('react-router');
var listCSS = require('./List.styl');
var Style = require('node-stylus-require/Style.js');
var mvJSON = require('../../../movies.json');

module.exports = React.createClass({

  render: function render() {
    var movies = this.props.movies || mvJSON;

    return (
      <div id='list'>
        <Style style={listCSS}></Style>
        <h1>Movies</h1>
        <h6>Click on a movie to see the details</h6>
        <ul>
          {movies.map(function(movie) {
            return (
              <li key={movie.id}>
                <Router.Link to={'/movie/' + movie.id}>
                  <img src={movie.image} alt={movie.title} />
                </Router.Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
});
