$(document).ready(function() {

  $(window).scroll(function () {
    if ($(window).scrollTop() > 105) {
      $('.navbar').addClass('navbar-fixed-top');
    }

    if ($(window).scrollTop() < 106) {
      $('.navbar').removeClass('navbar-fixed-top');
    }
  });
});