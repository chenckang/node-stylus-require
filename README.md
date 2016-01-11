# node-stylus-require

[![npm version](https://badge.fury.io/js/node-stylus-require.svg)](https://badge.fury.io/js/node-stylus-require)

## Synopsis

This is a stylus requiring tool for isomorphic applications based on react and node. Typically use express with react-engine for the backend and react with webpack for the frontend to create an awesome application. But this is also not limited to isomorphic application, you can use it as a SPA in the broswer environment based on webpack, that is without the backend. Or just use it in node environment to load stylus files.

## Installation

The installation is pretty simple. Use `npm install` node-stylus-require to your project, with suggestion of adding it as one of your dependencies.

    npm install --save node-stylus-require

## What is isomorphic and why

Isomorphic applications are the awesome ones that the backend and the frontend use the same code, which is usually JavaScript. And it is pretty fast with better user experience.

The reasons why they are fast are that they use backend rendering all the page with JavaScript executed so that the first screen is pretty fast, and the SPA on the frontend need no loading of addtional resources. Now with the help of NodeJS this is really possible that both the frontend and the backend use the same code. This is really cool and is the future of JavaScript!

The result is people like your awesome application. Here let's get start to learn how to use node-stylus-require to help your application's style management.

## Usage

The node-stylus-require provides 4 levels of usage to require stylus file into your applications. You may not limited to these levels, for it provides flexibility to support usage under other situations.

### Level 1 NodeJS

This is a simple usage, with this you can require stylus file directly into your applications.

    // Register .styl as the stylus files extensions
    require('node-stylus-require').register({extensions: '.styl'})
    // simple.styl is the stylus file under the same folder
    var simpleCSS = require('./simple.styl')

    console.log('This output css is %s !', JSON.stringify(simpleCSS()));

The `{extensions: '.styl'}` is optional, and the `.styl` is the default value. The return format is `{id: {MD5}, css: {CSS String}}`.

The complete example is [here](https://github.com/chenckang/node-stylus-require/tree/master/examples/level_1_simple-example). Run `npm start` to check the output.

### Level 2 Backend Rendering

This is a pure backend applications based on express. With the help of react-engine and express, we will create an site based on express.

The first step is still register `.styl` files to nodejs.

    var nodeStylusRequire = require('node-stylus-require')
    nodeStylusRequire.register()

The next step is to add an interceptor to express. The interceptor is an important part to render a format correct html page.

    var app = express()
    ...
    app.use(nodeStylusRequire.styleInterceptor)

In your jsx, you can require `.styl` files and require the Style react component.

    var SampleCSS = require('./Sample.styl')
    var Style = require('node-stylus-require/Style.jsx')

Finally, add them to your page use React `render` function.

    render() {
        return (
          <html ref="html" lang="en">
            <head>
                <title>Document</title>
            </head>
            <body>
              <Style style={SampleCSS}></Style>
              <Style style={SampleCSS}></Style>
              <div>
                <div className="Sample">
                    Hello, World!
                </div>
              </div>
            </body>
          </html>
        );
    }

The complete code is [here](https://github.com/chenckang/node-stylus-require/tree/master/examples/level_2_with_react-engine)! Run `npm start` in your shell to check it out.

### Level 3 SPA

This time we are going to create a Single-Page Application with the help of webpack. As it is a frontend SPA, you may find the first screen is a bit slow with white screen flashing at the beginning.

Firstly, add webpack loader for stylus files.

    test: /\.styl$/, loader: 'node-stylus-require/node-stylus-loader.js'

Thus your stylus files will be handled by webpack.

Then require stylus files and Style react component into you applications.

    var Style = require('node-stylus-require/Style.js')
    var MainCSS = require('./Main.styl')

Finally, add them to you page use the React render function.

    render() {
        return (
            <div id="main">
                <h1>Example</h1>
                <Link to="example">Go to example</Link>
                <Style style={MainCSS}></Style>
            </div>
        );
    }

The complete code is [here](https://github.com/chenckang/node-stylus-require/tree/master/examples/level_3_pure-webpack-SPA)! Run `npm start` in your shell to check it out.

### Level 4 Isomorphic

This will be a complete awesome isomorphic application based on React, React-Engine, Express, Webpack and node-stylus-require. Let's get start.

Firstly, In your express entry, you should register node-stylus-require to support requiring stylus file.

    var nodeStylusRequire = require('node-stylus-require')
    nodeStylusRequire.register()

Then, add express interceptor to help backend rendering.

    var app = express();
    ...
    app.use(nodeStylusRequire.styleInterceptor)

The next step is requiring stylus files and Style react component.

    var listCSS = require('./List.styl')
    var Style = require('node-stylus-require/Style.js')

Finally, add them to your application.

    render: function render() {
        return (
            <div id='list'>
                <Style style={listCSS}></Style>
                <h1>Movies</h1>
                <h6>Click on a movie to see the details</h6>
            </div>
        );
      }

After that you can require all the stylus files in your React component like this, thus the stylus files are handled. The complete code is [here](https://github.com/chenckang/node-stylus-require/tree/master/examples/level_4_isomorphic-app), run `npm start` in your shell to check it out.

## Additional Advice

For example if you want to create a React component name 'Example', thus will need to create 'Example.jsx'.

### Folders and Files

Create a folder named 'Example' for the React component where 'Example.jsx' is.

The wise location of your stylus file with the suggested name 'Example.styl' should be in folder 'Example', that is the same folder holding 'Example.jsx'.

### Relative Path or Absolute Path

Where in the 'Example.jsx' you should use relative path to stylus file of 'Example.styl'. For example, `var EampleCSS = require('./Example.styl')`.

All this will help you move your React component to any place you want.

## License

MIT (http://www.opensource.org/licenses/mit-license.php)
