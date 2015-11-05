var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var $ = require('jquery');
var request = require('request');
console.log('WHOA');
app.use(bodyParser.urlencoded());
app.get('/instagram', function(req, res) {
  request('https://api.instagram.com/oauth/authorize/?client_id=CLIENT-ID&redirect_uri=REDIRECT-URI&response_type=code', function(error, response, data) {
    res.send(response.body);
  })
})

app.get('/twitter', function(req, res) {
  request('https://api.twitter.com/1.1/trends/place.json?id=1', function(error, response, data) {
    res.send(response.body);
  })
})

app.listen(3000, function(){
  console.log('The server is running...')
});
