var express = require('express');
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var rp = require('request-promise');


var app = express();
app.disable('X-Powered-By');
app.use(bodyParser.json());
app.get('/', home);
app.post('/', postRoute);


app.listen(port, listen);

function home(req, res) {
  res.send('Hello!');

}

function postRoute(req, res) {
  var phrase = req.body.phrase.replace(/e/ig, '3').replace(/a/ig, 4).replace(/i/ig, 1);
  res.send(phrase);
}


function listen() {
  console.log("listening on ", port);
}
