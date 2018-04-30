// console.log($("h3").text("New Title"));
// console.log($("ul").text());
// console.log($("li").text());

// $("ul").html("<li>Hacked!</li><li>nanana</li>");

// console.log($("img").css("width"));
$("img").css("width", "380");
// console.log($("img").css("width"));

$("img").attr(
  "src",
  "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2014/10/7/1412692981382/Badger--012.jpg?w=1200&h=630&q=55&auto=format&usm=12&fit=crop&crop=faces%2Centropy&bm=normal&ba=bottom%2Cleft&blend64=aHR0cHM6Ly91cGxvYWRzLmd1aW0uY28udWsvMjAxOC8wMS8zMS9mYWNlYm9va19kZWZhdWx0LnBuZw&s=f3ab6073d8f5128810213b50dde992cb"
);

$("h4").addClass("done");

// var btn = document.querySelector("button");
// btn.addEventListener("click", function() {
//   $("li")
//     .first()
//     .toggleClass("correct");
// });

$("#toggle").click(function() {
  var text = $(this).text();
  console.log("You clicked " + text);
  $(this).css("backgroundColor", "gold");
  $(this).css("color", "black");
});

$('input[type="text"]').keypress(function(event) {
  if (event.which === 13) {
    console.log("enter!");
  }
});

$("#ok").on("click", function() {
  $(this).css("backgroundColor", "darkorange");
});

// $("body").keypress(function(event) {
//   console.log(event);
//   if (event.which === 98) {
//       $(this).css("backgroundColor", "#fafafa")
//   }
// });

$("body").on("keypress", function(event) {
  if (event.which === 98) {
    $(this).css("backgroundColor", "#fafafa");
  }
});

// select dropdown
// Or with jQuery
$(document).ready(function() {
  $("select").formSelect();
});
