$("#fade").on("click", function() {
  $(".fades").fadeToggle(1000, function() {});
});

$("#slide").on("click", function() {
  $(".fades").slideToggle(500);
});
