$(document).ready(function () {

	$("#article-product .content-wrapper").load("article_product.html");
	$("#article-customer .content-wrapper").load("article_customer.html");
	$("#videos-archive .content-wrapper").load("article_video.html");

	const numberWithCommas = (x) => {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	};

  var tooltipWindow = $('<div class="tool-window"></div>').appendTo('body');
  $('#ulAccordion > li > a').mousemove(function(e) {
    var text = $(this).parent().html();
    $(tooltipWindow).addClass('active').css({
      left: e.clientX + 'px',
      top: e.clientY + 'px',
    }).html(text).find('[data-parent="#ulAccordion"]').attr("id", "").attr("class", "");
  }).mouseleave(function() {
    tooltipWindow.removeClass('active');
  });
  $(window).on("scroll", function() {
  	tooltipWindow.removeClass('active');
  });

	$(".owl-brands").owlCarousel({
		responsive: {
			0: {
				items: 3,
			},
			576: {
				items: 4,
			},
			768: {
				items: 5,
			},
			992: {
				items: 6,
			},
			1200: {
				items: 7,
			},
			1350: {
				items: 9,
			},
		},
		autoplay: true,
		loop: true,
		dots: false,
	});

	var owl2 = $(".owl-2");
	var owl2AutoPlayed = false;
	owl2.owlCarousel({
		responsive: {
			992: {
				nav: true,
			},
		},
		items: 1,
		navText: ["", ""],
		loop: true,
		autoplayTimeout: 10000,
		smartSpeed: 1000,
		onChanged: function (event) {
			$(event.target).trigger('stop.owl.autoplay');
			$(event.target).trigger('play.owl.autoplay');
		}
	});

	$(".owl-3").owlCarousel({
		responsive: {
			0: {
				items: 1,
				nav: false,
			},
			768: {
				items: 2,
				nav: false,
			},
			992: {
				items: 2,
				nav: true,
			},
			1200: {
				items: 3,
				nav: true,
			},
			1350: {
				items: 4,
				nav: true,
			},
		},
		margin: 10,
		dots: true,
		dotsEach: true,
		navText: ["", ""],
	});

	var owl4 = $(".owl-4");
	var owl4Viewed = false;
	owl4.owlCarousel({
		items: 1,
		loop: true,
		nav: true,
		navText: ["", ""],
		dotsContainer: ".owl-header .owl-dots",
		autoplayTimeout: 10000,
		onChanged: function (event) {
			var currentTextIndex = event.page.index;
			if (currentTextIndex != -1) {
				$(event.target).trigger('stop.owl.autoplay');
				$(event.target).trigger('play.owl.autoplay');
				$('.section-4 p').removeClass('current');
				$('.section-4 p').eq(currentTextIndex).addClass('current');
			};
		}
	});

	$(".owl-5").owlCarousel({
		responsive: {
			0: {
				items: 1,
				nav: false,
			},
			768: {
				items: 2,
				nav: false,
			},
			992: {
				items: 3,
				nav: true,
			},
			1200: {
				margin: 80,
				nav: true,
			},
		},
		margin: 10,
		autoHeight: true,
		dots: true,
		dotsEach: true,
		navText: ["", ""],
		onChanged: function (event) {
			$(".owl-5 .owl-dots").css('opacity', '0');
			$(event.target).find('.owl-dots').css('opacity', '1');
		}
	});

	$(window).on("scroll", function (e) {
		// if ($('.section-9').length) {
		// 	if (window.pageYOffset + 500 > $('.section-9').offset().top) {
		// 		if (!owl2AutoPlayed) {
		// 			owl2.trigger('to.owl.carousel', 0);
		// 			owl2AutoPlayed = true;
		// 		};
		// 	};
		// };

		if ($('.section-4').length) {
			if (window.pageYOffset + 400 > $('.section-4').offset().top) {
				if (!owl4Viewed) {
					owl4.trigger('to.owl.carousel', 0);
					owl4.trigger('play.owl.autoplay');
					owl4Viewed = true;
				};
			};
		};
	});

	$(".owl-6").owlCarousel({
		responsive: {
			0: {
				items: 1,
				nav: false,
			},
			768: {
				items: 2,
				nav: false,
			},
			992: {
				items: 3,
				nav: true,
			},
		},
		margin: 30,
		autoHeight: true,
		navText: ["", ""],
	});

	$('[data-toggle="tooltip"]').tooltip();

	$('.video-modal').click(function (e) {
		var videoId = $(this).attr('data-id');
		var options = {
			id: videoId,
			height: '780',
			width: '1280',
			title: false,
			byline: false,
			portrait: false,
			loop: true
		};
		var player = new Vimeo.Player('player', options);
		player.ready().then(function() {
			player.play();
		});
		$('#youtubeModal').modal('show');
	});
	$('#youtubeModal').on('hide.bs.modal', function () {
		$('#youtubeModal .embed-responsive').html('<div id="player"></div>');
	});

	$("#article-customer").on('hide.bs.modal', function () {
		var iframes = $("#article-customer iframe");
		for(var i = 0; i <= iframes.length; i++) {
			$(iframes[i]).attr('src', $(iframes[i]).attr('src'));			
		};
		var videos = $("#article-customer video");
		for(var i = 0; i <= videos.length; i++) {
			$(videos[i]).attr('src', $(videos[i]).attr('src'));			
		};
	});
	$("#article-product").on('hide.bs.modal', function () {
		var iframes = $("#article-product iframe");
		for(var i = 0; i <= iframes.length; i++) {
			$(iframes[i]).attr('src', $(iframes[i]).attr('src'));			
		};
		var videos = $("#article-product video");
		for(var i = 0; i <= videos.length; i++) {
			$(videos[i]).attr('src', $(videos[i]).attr('src'));			
		};
	});

	$('.cc-number').mask('0000 0000 0000 0000');
	$('.cc-date').mask('00 / 00');
	$('.cc-cvc').mask('0000');

	// $('#checkbox-toggle').change(function () {
	// 	$('.card-form').toggleClass('active');
	// });
	// $('#checkbox-form').change(function () {
	// 	$('.form-checked').toggleClass('hidden');
	// });

	// var select_html = '';
	// for (var i = 1; i <= 60; i++) {
	// 	select_html += `
	// 		<option>Qty: ` + i + `</option>
	// 	`;
	// };
	// $(".one_to_60").html(select_html);
	// $('.cart select').selectize();
	// $('select').selectize();

	// $('.payment-method input[type=radio]').change(function () {
	// 	$('.pay-form').toggleClass('hidden');
	// });

	// $('#select-bct').change(function () {
	// 	var value = $(this).val();
	// 	var USDValue = value.split(' ')[0].replace(/,/g, '') / 10;
	// 	$(this).closest('form').find('.select-option .d-block').html('$' + numberWithCommas(USDValue));
	// });

	// var labelCardBonusArr = [
	// 	7000, 10500, 14000, 20000, 24000,
	// 	28000, 32000, 36000, 40000, 67500,
	// 	90000, 135000, 180000, 250000, 300000,
	// 	350000,	400000,	450000,	500000,	750000,
	// 	900000,	1050000, 1200000, 1750000, 2100000,
	// 	2800000, 4000000, 4800000, 5600000, 7200000,
	// 	8100000, 10000000
	// ];

	// $('.label-card select').change(function (e) {
	// 	var value = $(this).val()
	// 	var index = $(this.nextElementSibling).find('.selectize-dropdown div[data-value="' + value + '"]').index();
	// 	var bonusValue = labelCardBonusArr[index];
	// 	var USDValue = value.split(' ')[0].replace(/,/g, '') / 10;
	// 	$(this).closest('.label-card').find(' > .text-blue').html('+' + numberWithCommas(bonusValue) + ' Bonus BCT');
	// 	$(this).closest('.label-card').find(' > .price').html('$' + numberWithCommas(USDValue));
	// });

	$('.label-group').click(function (e, param) {
		e.preventDefault();
		var value=$(this).find('.package-select').attr('total');
		$(".single-notice .package").html(value + " BCT");
		// $(".single-notice .package").html($(this).find('.label-card .row:nth-child(2) .package-select > span')[0].childNodes[0].data + "BCT");
		if ($(this).hasClass('checked')) {
			if (param == "no-hidden") return;
			$(this).removeClass('checked');
			$(this).find('input[type=radio]').prop('checked', false);
			$(".single-notice").css('visibility', 'hidden');
		} else {
			$('.label-group').removeClass('checked');
			$(this).addClass('checked');
			$(this).find('input[type=radio]').prop('checked', true);
			$(".single-notice").css('visibility', 'visible');
		}
	});

});

