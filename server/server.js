var express = require('express');
var Cookies = require('cookies');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser  = require('cookie-parser');
var $ = require('jquery');
var request = require('request');
var cors = require('cors');
var Bluebird = require('bluebird');
var twit = require('twit');
var mainPage = require('./../client/main.js');
var instaApi = require('instagram-node').instagram();
// var index = require('/Users/Bryan/Desktop/codesmith/hackathon-2/client');
Bluebird.promisifyAll(instaApi);

console.log('WHOA');


var app = express();
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(cors());
app.use(express.static('client'));
// app.use('/', index)


var T = new twit({
	consumer_key: 'Uwgd40BQC6AQRvYxhbw2ePwGi',
	consumer_secret: 'Yodqb98skO9qHetuKaocvRSapAf2mUGpBoSo4LgEK67s2pMWfy',
	access_token: '766510176-zL8kEcPZOMiUIBxCyAxODrMxvnDNpTkJyWD4oRog',
	access_token_secret: 'OoiHWN99Ynl2Zt79g0TIDX11V10LDceQ60AaA9ZzLrave'
})

var twitterData;
T.get('/search/tweets', { q: 'funny since:2014-10-10', count:24, result_type: 'popular'}, function (err, data, response) {
  twitterData = data;
  // console.log(twitterData);
})

app.get('/twitter', function(req, res) {
    console.log('hi');
    console.log(twitterData.statuses.length);
    // console.log(Object.keys(twitterData));
    res.send(twitterData);
    res.send();
})

app.get('/instagram', function(req, res) {
  instaApi.use({
    client_id: "1cc172bf6e5e4ee09fa3666b38571e8d",
    client_secret: "63bf4faf99f14467bd80c7ed69343f0c"
  });
      res.redirect(instaApi.get_authorization_url("http://localhost:3000/instaData"));
});

app.get('/instaData', function(req, res) {
  instaApi.authorize_userAsync(req.query.code, "http://localhost:3000/instaData")
  .then(function (result) {

    // app.get('https://api.instagram.com/v1/media/popular?access_token='+result.access_token, function(req, res) {
    //   console.log("Gotem");
    //  });
    // key = result.access_token;
  // var cookie = new Cookies(req, res);
  //   cookie.set('instaToken', result.access_token);
    // console.log("no here)")
    res.cookie('instaToken',result.access_token);
    // console.log(result.access_token);
    // console.log(res.req.cookies.instaToken);
    res.redirect('/postInsta');
  })
  .catch(function (errors) {
    console.log(errors);
  });
});

app.get('/postInsta', function(req,res) {
  console.log(req.cookies.instaToken);
  if(req.cookies.instaToken) {
    instaApi.use({ access_token: req.cookies.instaToken });
    instaApi.media_popular(function(medias, pagination, remaining, limit) {
      // console.log(pagination[0].images.thumbnail.url);
      var images = pagination.map(function(image) {
        return image.images.thumbnail.url;
      });
      console.log("got here");
      // console.log(images)
      res.send(pagination);
      // res.redirect('/mainPage');
      // mainPage(images);
    });
  }
})


app.get('/', function(req, res) {
  res.redirect('/mainPage');
});

app.get('/mainPage', function(req, res) {
  res.sendFile(path.join(__dirname,"./../client/index.html"));
});

////
// var util = require('util');
console.log('SUP');


app.listen(3000, function(){
  console.log('The server is running...')
});
