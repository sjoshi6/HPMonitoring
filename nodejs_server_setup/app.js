var express  = require('express');
var connect = require('connect');
var app      = express();
var port     = process.env.PORT || 8080;

// Configuration
app.use(connect.logger('dev'));
app.use(connect.json());
app.use(connect.urlencoded());

// Routes
var routedata = require('./routes/routes.js')
routedata(app);
app.listen(port);
console.log('The App runs on port ' + port);
