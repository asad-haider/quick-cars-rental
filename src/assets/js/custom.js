$(window).scroll(function () {
  if ($(this).scrollTop() >= 50) {
    $('#return-to-top').fadeIn(200);
  } else {
    $('#return-to-top').fadeOut(200);
  }
});
$('#return-to-top').click(function () {
  $('body,html').animate({
    scrollTop: 0
  }, 500);
});

$(document).ready(function () {

  $('a#hamburg').on('click', function (e) {
    $('html').toggleClass('open-menu');
    return false;
  });
  $('div#hamburg').on('click', function () {
    $('html').removeClass('open-menu');
  });

  $('.popUp').click(function () {
    $('.popUp').fadeOut('slow');
  });

  $('.s-equal').matchHeight();
  $('.content-box').matchHeight();
  $('.third-listing').matchHeight();


  $('#datetimepicker10').datetimepicker();
  $('#datetimepicker3').datetimepicker();
  $('#datetimepicker11').datetimepicker();
  $('#datetimepicker33').datetimepicker();

  $(".tabs-menu a").click(function (event) {
    event.preventDefault();
    $(this).parent().addClass("current");
    $(this).parent().siblings().removeClass("current");
    var tab = $(this).attr("href");
    $(".tab-content").not(tab).css("display", "none");
    $(tab).fadeIn();
  });
});
