$(function () {
  $('#slideUp').on('click', function() {
    $('.box').slideUp();
  });
  $('#slideDown').on('click', function() {
    $('.box').slideDown();
  });
  $('#slideToggle').on('click', function() {
    $('.box').slideToggle();
  });
});