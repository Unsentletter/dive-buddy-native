var express = require('express');
var _ = require('lodash');

var PORT = 3001;

var app = express();

app.get('/', function (req, res) {
  res.send('it worked');
})


app.listen(PORT, function () {
  console.log(`Listening on PORT ${PORT}`);
})
