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
    autoHeight: true,
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

  $('#aside-nav a, .scroll-id').mPageScroll2id({
    scrollSpeed: 900,
    offset: 53,
  });




  $('.video-modal').click(function (e) {
    var videoId = $(this).attr('data-id');
    var videoDescription = $(this).attr('data-description');
    var $iframe = '<div class="video-container"><iframe src="https://www.youtube.com/embed/' + videoId + '" frameborder="0" allowfullscreen></iframe></div>';
    $('#youtubeModal').html($iframe + videoDescription);
    $('#overlay,#youtubeModal').addClass('open');
  });
  
  $('#overlay').click(function () {
    $(this).removeClass('open');
    $('#youtubeModal').removeClass('open');
    $('#youtubeModal').html('');
  });


  var select_html = '';
  for (var i = 1; i <= 60; i++) {
    select_html += `
			<option>Qty: ` + i + `</option>
		`;
  }
  $(".one_to_60").html(select_html);
  $('.cart select').selectize();
  $('select').selectize();

});