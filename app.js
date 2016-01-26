var express = require('express');
var https = require('https');
var http = require('http');
var cors = require('cors');
var fs = require('fs');
var app = express();

var options = {
  key: fs.readFileSync('/Users/tball/server.key'),
  cert: fs.readFileSync('/Users/tball/server.crt')
};

app.use(cors());

app.post('/', function (req, res) {
  res.send({
    "access_token": "d7b7b093-821d-3ed5-ad8b-e91f2ae669d5",
    "expires_in": 3600,
    "scope": "sungevity.com",
    "refresh_token": "827af4a2-6dc7-3c75-8bd7-36b7823857fb",
    "token_type": "Bearer"
  });
});

app.get('/', function (req, res) {
  res.send({
    "access_token": "d7b7b093-821d-3ed5-ad8b-e91f2ae669d5",
    "expires_in": 3600,
    "scope": "sungevity.com",
    "refresh_token": "827af4a2-6dc7-3c75-8bd7-36b7823857fb",
    "token_type": "Bearer"
  });
});

app.post('/login', function (req, res) {
  res.send({
    test: "TESTING"
  });
});

https.createServer({
     key: options.key,
     cert: options.cert
   }, app)
   .listen(3000, function() {
     console.log('Listening on port 3000...')
   });
