var express = require('express');
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var rp = require('request-promise');

var app = express();

app.use(bodyParser.json());
app.get('/', home);
app.post('/', postRoute);


app.listen(port, listen);

function home(req, res) {
  res.send('Hello!');

}

function postRoute(req, res) {
  console.log(req.body);
  res.send('Done Parsing!');
}


function listen() {
  console.log("listening on ", port);
}
