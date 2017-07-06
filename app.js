let  express = require('express');

let  env = process.env.NODE_ENV || 'development';

let  app = express();
let  config = require('./server/config/config')[env];

require('./server/config/express')(app, config);
require('./server/config/mongodb')();
//const { connect } = require('./db');
require('./server/config/passport')();
//require('./server/routes')(app);

app.listen(config.port);
console.log("Server running on port: " + config.port);
