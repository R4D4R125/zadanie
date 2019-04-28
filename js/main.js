$(document).ready(function animation() {
  $(".menu_btn").click(function() {
    $(".container_2").toggleClass("active");
    $(".container_2").toggleClass("toggle");
  });
});
$(".rotate").click(function() {
  $(this).toggleClass("down");
});
