var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// mongo
var mongoUri = 'mongodb://localhost/dogs';
mongoose.connect(mongoUri);
var db = mongoose.connection;
db.on('error', function () {
  throw new Error('unable to connect to database at ' + mongoUri);
});

require('./models/dog');
require('./routes')(app);

app.listen(3001);
console.log('Listening on port 3001...');
