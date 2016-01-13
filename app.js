var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send({
  "access_token": "d7b7b093-821d-3ed5-ad8b-e91f2ae669d5",
  "expires_in": 3600,
  "scope": "sungevity.com",
  "refresh_token": "827af4a2-6dc7-3c75-8bd7-36b7823857fb",
  "token_type": "Bearer"
});
 });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})