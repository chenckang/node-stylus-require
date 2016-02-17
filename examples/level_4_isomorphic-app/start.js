const PORT = 8888;
require('./index.js');
var app = require('./app.js');

const server = app.listen(PORT, function() {
  console.log('Example app listening at http://localhost:%s', PORT);
});
