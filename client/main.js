function instagramConnect() {
  $.ajax({
    type: "GET",
    url: "http://localhost:3000/postInsta",
    // dataType: 'jsonp',
    // crossDomain:true,
    // headers: {'Access-Control-Allow-Origin': '*'},
    success: function(data) {
      console.log("OH IT WORK");
      console.log(data);
      for(var i = 0; i < data.length; i++) {
        // $('#container1').append('<p class="animated flipInX" >'+data[i].user.username+'</p>')
        $('#container1').append('<img class="instaPic animated flipInX" src='+data[i].images.thumbnail.url+'></img>');
        // $('#container1').append('<p class="close animated flipInX">'+data[i].user.username+'</p>');
      }
    },
    error: function(err) {
      // console.log(err);
    },
  });
}

function getBig(a,b,c) {
  console.log(a,b,c);
  // $('#container2').append('<img class="bigImg" src='+url+'></img>');
}

function twitterConnect() {
  $.ajax({
    type: "GET",
    url: "http://localhost:3000/twitter",
    success: function(data) {
      console.log(data);
      console.log(data.statuses.length);
      var status = data.statuses;
      for(var i = 0; i < data.statuses.length; i++) {
        $('#container2').append(
          '<img class="twitPic animated bounceInLeft" src='+status[i].user.profile_image_url+'></img>'+
          '<p class="names animated bounceInLeft">'+status[i].user.name+'</p>'+
          '<p class="message animated bounceInRight">'+status[i].text+'</p>'
        );

      }
    },
    error: function(err) {
      // console.log(err);
    },
    dataType: "json"
  });
}
