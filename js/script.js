var containerEl = document.querySelector(".myfilter");

var mixer = mixitup(containerEl);
// =================

$(".slickSliders").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  arrows: true,
  prevArrow: '<i class="fa-solid fa-square-caret-left arrows"></i>',
  nextArrow: '<i class="fa-solid fa-square-caret-left next"></i>',
  dots: true,
});

//==== Back-to-top button
$(window).on("scroll", function (event) {
  if ($(this).scrollTop() > 400) {
    $(".back-to-top").fadeIn(200);
  } else {
    $(".back-to-top").fadeOut(200);
  }
});
//==== Animate the scroll to top
$(".back-to-top").on("click", function (event) {
  event.preventDefault();

  $("html, body").animate(
    {
      scrollTop: 0,
    },
    1000
  );
});

// ===============
AOS.init();
