var Promise = require('bluebird');

console.log('ONE');

var sendThisSecond = new Promise(function(resolve, reject) {
  setTimeout(function() {
    console.log('TWO');
    resolve();
  }, 1000);
});

sendThisSecond.then(function(result) {
 console.log('THREE');
});
