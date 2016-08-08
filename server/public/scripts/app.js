$(document).ready(function(){
  var i = 0;
    $(".next").on('click', function(){
        $('.container').empty();
        console.log(appendDom());
        // console.log(nextPerson());
       });

    $.ajax({
      type: "GET",
      url: "/data",
      success: function(data){
        console.log(data);
        $("#data").append('<div class="container"></div>');
    },
      error: function() {
        console.log("error with request")
      }
    });


});
var i = 0;
function nextPerson() {
  i++;
  return data.omicron[i].name;
}

function appendDom() {
  console.log(data);
  $("#data").append('<div class="container"></div>');
  var $el = $("#data").children().last();
  $el.append('<h3>' + data.omicron[0].name + '<br>' + data.omicron[0].git_username + '<br>' + data.omicron[0].shoutout + '</h3>');
}
