require('node-stylus-require').register()

var simpleCSS = require('./simple.styl')

console.log('This output css is %s !', JSON.stringify(simpleCSS))

module.exports = simpleCSS