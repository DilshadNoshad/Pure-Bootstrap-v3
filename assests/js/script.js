$(document).ready(function () {
  $(".nav_button").click(function () {
    $(".nav_button").toggleClass("change");
  });
});

$(window).scroll(function () {
  let position = $(this).scrollTop();
  if (position >= 200) {
    $(".nav-menu").addClass("custom-navbar");
  } else {
    $(".nav-menu").removeClass("custom-navbar");
  }
});

$(window).scroll(function () {
  let position = $(this).scrollTop();
  if (position >= 650) {
    $(".sunglass-img").addClass("slide_from_left");
    $(".mission-text").addClass("slide_from_right");
  } else {
    $(".sunglass-img").removeClass("slide_from_left");
    $(".mission-text").removeClass("slide_from_right");
  }
});
