var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var $ = require('jquery');
var request = require('request');
console.log('WHOA');
app.use(bodyParser.urlencoded());

var twit = require('twit');
// var util = require('util');
console.log('SUP');

var T = new twit({
	consumer_key: 'Uwgd40BQC6AQRvYxhbw2ePwGi',
	consumer_secret: 'Yodqb98skO9qHetuKaocvRSapAf2mUGpBoSo4LgEK67s2pMWfy',
	access_token: '766510176-zL8kEcPZOMiUIBxCyAxODrMxvnDNpTkJyWD4oRog',
	access_token_secret: 'OoiHWN99Ynl2Zt79g0TIDX11V10LDceQ60AaA9ZzLrave'
})

var twitterData;
T.get('/search/tweets', { q: 'funny since:2014-10-10', count:2, result_type: 'popular'}, function (err, data, response) {
  // console.log(data);
  twitterData = data;
  // console.log(twitterData);
})




app.get('/twitter', function(req, res) {
    console.log('hi');
    console.log(twitterData);
    res.send(twitterData);
    res.send();


})



app.get('/instagram', function(req, res) {
  request('https://api.instagram.com/oauth/authorize/?client_id=CLIENT-ID&redirect_uri=REDIRECT-URI&response_type=code', function(error, response, data) {
    res.send(response.body);
  })
})



app.listen(3000, function(){
  console.log('The server is running...')
});
