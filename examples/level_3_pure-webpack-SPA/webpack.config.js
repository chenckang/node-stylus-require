'use strict';

var webpack = require('webpack');
var path = require('path');
var appPath = path.join(__dirname, 'app');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    target: 'web',
    cache: true,
    entry: {
        module: path.join(appPath, 'module.jsx'),
        common: ['react', 'react-router', 'alt']
    },
    resolve: {
        root: [appPath],
        extensions: ['', '.js'],
        moduleDirectories: ['node_modules', 'app']
    },
    output: {
        path: path.join('webroot', 'app'),
        publicPath: '/app/',
        filename: '[name].js',
        pathInfo: true
    },
    module: {
        loaders: [
            {test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader'},
            {test: /\.styl$/, loader: 'node-stylus-require/node-stylus-loader.js'}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'page/index.html',
            inject: 'body'
        }),
        new webpack.NoErrorsPlugin()
    ],
    debug: true,
    devtool: 'source-map',
};
