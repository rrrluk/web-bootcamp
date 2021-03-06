// Check off specific todos by clicking
$("ul").on("click", "li", function () {
  $(this).toggleClass("completed");
});

// Click on X to delete todo
$("ul").on("click", "span", function (event) {
  $(this)
    .parent()
    .fadeOut(500, function () {
      $(this).remove();
    });
  event.stopPropagation();
});

$("input[type='text']").keypress(function (event) {
  if (event.which === 13) {
    // grabbing text from input
    var todoText = $(this).val();
    // clear input
    $(this).val("");
    // create a new li and add to ul
    $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span>" + todoText + "</li>");
  }
});

$("#toggle-form").click(function () {
  $("input[type='text']").slideToggle();

});