function twitterConnect() {

}

function instagramConnect() {
  $.ajax({
    type: "GET",
    crossDomain:true,
    headers: {'Access-Control-Allow-Origin': '*'},
    url: "http://localhost:3000/instagram",
    success: function() {
      console.log("DOES IT WORK???")
    },
    dataType: "json"
});
}
