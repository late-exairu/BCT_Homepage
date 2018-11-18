$(document).ready(function () {

	const numberWithCommas = (x) => {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}

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
		autoplayTimeout: 5000,
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
			},
			768: {
				items: 2,
			},
			1200: {
				items: 3,
			},
			1350: {
				items: 4,
			},
		},
		margin: 10,
		dots: true,
		nav: true,
		navText: ["", ""],
	});

	var owl4 = $(".owl-4");
	var owl4Viewed = false;
	owl4.owlCarousel({
		items: 1,
		autoplay: true,
		loop: true,
		nav: true,
		navText: ["", ""],
		dotsContainer: ".owl-header .owl-dots",
		onChanged: function (event) {
			$(event.target).trigger('stop.owl.autoplay');
			$(event.target).trigger('play.owl.autoplay');
		}
	});

	$(".owl-5").owlCarousel({
		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 2,
			},
			992: {
				items: 3,
			},
			1200: {
				margin: 80,
			},
		},
		margin: 10,
		autoHeight: true,
		dots: true,
		nav: true,
		navText: ["", ""],
		onChanged: function (event) {
			$(".owl-5 .owl-dots").css('opacity', '0');
			$(event.target).find('.owl-dots').css('opacity', '1');
		}
	});

	$(window).on("scroll", function (e) {
		if ($('.section-9').length) {
			if (window.pageYOffset + 500 > $('.section-9').offset().top) {
				if (!owl2AutoPlayed) {
					owl2.trigger('to.owl.carousel', [0, 0]);
					owl2AutoPlayed = true;
				}
			}
		}

		if ($('.section-4').length) {
			if (window.pageYOffset + 400 > $('.section-4').offset().top) {
				if (!owl4Viewed) {
					owl4.trigger('to.owl.carousel', [0, 0]);
					owl4Viewed = true;
				}
			}
		}
	});

	$(".owl-6").owlCarousel({
		responsive: {
			0: {
				items: 3,
				margin: 5,
			},
			576: {
				items: 4,
				margin: 10,
			},
			// 768: {
			// 	items: 5,
			// },
			// 992: {
			// 	items: 4,
			// },
			// 1200: {
			// 	items: 5,
			// },
		},
		dots: false,
		nav: true,
		navText: ["", ""],
	});


	$('.scroll-id').mPageScroll2id({
		scrollSpeed: 900,
		offset: 64,
	});

	$('[data-toggle="tooltip"]').tooltip();


	$('.video-modal').click(function (e) {
		var videoId = $(this).attr('data-id');
		var player = new YT.Player('player', {
			height: '780',
			width: '1280',
			videoId: videoId,
			playerVars: {
				rel: 0
			},
			events: {
				'onReady': onPlayerReady,
				'onStateChange': onPlayerStateChange
			}
		});

		function onPlayerReady(event) {
			event.target.playVideo();
		}

		function onPlayerStateChange(event) {
			if (event.data === 0) {
				$('#youtubeModal').modal('hide')
			}
		}
		$('#youtubeModal').modal('show')
	});
	$('#youtubeModal').on('hide.bs.modal', function () {
		$('#youtubeModal .video-container').html('<div id="player"></div>');
	})


	$('#checkbox-toggle').change(function () {
		$('.card-form').toggleClass('active');
	});
	$('#checkbox-form').change(function () {
		$('.form-checked').toggleClass('hidden');
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

	// ---------- //

	$('.cc-number').mask('0000 0000 0000 0000');
	$('.cc-date').mask('00 / 00');
	$('.cc-cvc').mask('0000');

	$('.payment-method input[type=radio]').change(function () {
		$('.pay-form').toggleClass('hidden');
	});

	$('#select-bct').change(function () {
		var value = $(this).val();
		var USDValue = value.split(' ')[0].replace(/,/g, '') / 10;
		$(this).closest('form').find('.select-option .d-block').html('$' + numberWithCommas(USDValue));
	});

	$('.tab-a').click(function () {
		$('.tab-a').removeClass('active');
		$(this).addClass('active');
		$('.pills').removeClass('active');
		var href = $(this).attr('href');
		$(href).addClass('active');

		var text = $(href + " p.tip span").length > 0 ? $(href + " p.tip span")[0].innerText : ' ';
		$('body').append('<input id="clipboard">');
		$("input#clipboard").val(text).select();
		document.execCommand('copy');

		$("input#clipboard").remove();
	});

	var labelCardBonusArr = [
		7000,
		10500,
		14000,
		20000,
		24000,
		28000,
		32000,
		36000,
		40000,
		67500,
		90000,
		135000,
		180000,
		250000,
		300000,
		350000,
		400000,
		450000,
		500000,
		750000,
		900000,
		1050000,
		1200000,
		1750000,
		2100000,
		2800000,
		4000000,
		4800000,
		5600000,
		7200000,
		8100000,
		10000000,
	];

	$('.label-card select').change(function (e) {
		var value = $(this).val()
		var index = $(this.nextElementSibling).find('.selectize-dropdown div[data-value="' + value + '"]').index();

		var bonusValue = labelCardBonusArr[index];
		var USDValue = value.split(' ')[0].replace(/,/g, '') / 10;

		$(this).closest('.label-card').find(' > .text-blue').html('+' + numberWithCommas(bonusValue) + ' Bonus BCT');
		$(this).closest('.label-card').find(' > .price').html('$' + numberWithCommas(USDValue));
	});

	$('.label-card').hover(function (){
			$(this).addClass('hover');
		},
		function () {
			$(this).removeClass('hover');
		}
	);

	$('.label-group').click(function (e) {
		e.preventDefault();
		if ($(this).find('select').length > 0) {
			$(".single-notice .package").html($(this).find('select')[0].innerText);
		}
		else {
			$(".single-notice .package").html($(this).find('.label-card .fz-20')[0].childNodes[0].data + "BCT");
		}

		if ($(this).hasClass('checked')) {
			$(this).removeClass('checked');
			$(this).find('.label-card').removeClass('hover');
			$(this).find('input[type=radio]').prop('checked', false);

			$(".single-notice").css('visibility', 'hidden');
		} else {
			$('.label-group').removeClass('checked');
			$(this).addClass('checked');
			$(this).find('input[type=radio]').prop('checked', true);

			$(".single-notice").css('visibility', 'visible');
		}
	});

	$('#section-5 .owl-5').hover(function () {
		$(this.previousElementSibling).addClass('hover');
	},
	function () {
		$(this.previousElementSibling).removeClass('hover');
	});
});