// function toggleSidebar(params) {
//   document.getElementById("navbar").classList.toggle("container_items");
// }

// $(document).ready(function() {
//   $(".menu_btn").click(function() {
//     $(".item_2").animate({ left: "250px" });
//     width: "toggle";
//   });
// });

$(document).ready(function animation() {
  $(".menu_btn").click(function() {
    $(".container_2").toggleClass("active");
    $(".container_2").toggleClass("toggle");
  });
});
$(".rotate").click(function() {
  $(this).toggleClass("down");
});
