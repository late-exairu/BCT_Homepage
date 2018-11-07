$(document).ready(function () {

  $(".owl-brands").owlCarousel({
    items: 9,
    autoplay: true,
    loop: true,
    dots: false,
  });

  $(".owl-2").owlCarousel({
    items: 1,
  });

  $(".owl-3").owlCarousel({
    items: 4,
    margin: 10,
    loop: true,
    dots: false,
    nav: true,
    navText: ["", ""],
  });

  $(".owl-4").owlCarousel({
    items: 1,
    autoplay: true,
    loop: true,
    nav: true,
    navText: ["", ""],
    dotsContainer: ".owl-header .owl-dots",
  });

  $(".owl-5").owlCarousel({
    items: 3,
    margin: 80,
    loop: true,
    dots: false,
    nav: true,
    navText: ["", ""],
  });

  $('#aside-nav a').mPageScroll2id({
    scrollSpeed: 900,
    offset: 53,
  });


  var select_html = '';
  for (var i = 1; i <= 60; i++) {
    select_html += `
			<option>Qty: ` + i + `</option>
		`;
  }
  $(".one_to_60").html(select_html);
  $('.cart select').selectize();

});