// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
alert("welcome to the Mcnoble's Pixel art Maker");
function makeGrid(height, width) {

// Your code goes here!

var art = "";
  for(var x = 0; x < height; x++) {
    art += "<tr>";
    for(var y = 0; y < width; y++) {
      art += "<td></td>";
    }
    art += "</tr>";
  }
  $("#pixelCanvas").html(art);
}

$(function(){
  var height, width;
  $("#sizePicker").on('submit', function(event){
     height = $("#inputHeight").val();
     width = $("#inputWeight").val();
    console.log(height, width);
    event.preventDefault();
    makeGrid(height, width);
  });
  $("#pixelCanvas").on('click', 'td', function(){
    var color = $("#colorPicker").val();
    console.log($(this).css("background-color"));
    if($(this).css("background-color") == "#FFFFFF" || $(this).css("background-color") == "rgba(0, 0, 0, 0)" || $(this).css("background-color") == "rgb(255, 255, 255)") {
      $(this).css("background-color", color);
    } else {
      $(this).css("background-color", "#FFFFFF");
    }
  })


});
