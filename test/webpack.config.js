'use strict';
var path = require('path');
var appPath = path.join(__dirname);

console.log(appPath)

module.exports = {
    resolve: {
        root: [appPath]
    },
    module: {
        loaders: [
            {test: /\.styl$/, loader: '../../node-stylus-loader.js'}
        ]
    }
};
