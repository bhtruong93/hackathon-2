
var twit = require('twitter');
var util = require('util');

	var twitter = new twit({
		consumer_key: 'iguMvY5DQmCENWjhFInJwGBON',
		consumer_secret: ' sV3IF4MBwgFGu6aanRxIR7QipRAGZk3d4JDt3llHWTE3MOJf1H',
		access_token_key: '618546359-qf5aZDK6ubNTNvPrf7opSUt6n5YTdRst35lMweFD',
		access_token_secret: 'e0GG7YEbxhQMfkVzerfEY60T5dRoNPnWzcbb0X8fqrRNE'
	});

var count = 0;

twitter.stream('filter', {track: 'love'}, function(stream){
	stream.on('data', function(data){
		console.log(util.inspect(data));
		stream.destroy;
	})
})

