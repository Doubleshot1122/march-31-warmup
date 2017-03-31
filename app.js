var express = require('express');
var port = process.env.PORT || 30000;
var bodyParser = require('body-parser');
var rp = require('request-promise');

var app = express();



app.listen(port, listenHandler);



function listenHandler() {
  console.log("listening on ", port);
}
