//Fixed navigation bar
$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

//Make the <header> element stretch across the entire screen
$(document).ready(function () {
  $('.header').height($(window).height());
});
