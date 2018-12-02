$(document).ready(function () {

	$("#article-product .modal-content .content-wrapper").load("article_product.html");
	$("#article-customer .modal-content .content-wrapper").load("article_customer.html");
	$("#videos-archive .modal-content .content-wrapper").load("article_video.html");

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
		dotsEach:true,
		nav: true,
		navText: ["", ""],
	});

	var owl4 = $(".owl-4");
	var owl4Viewed = false;
	owl4.owlCarousel({
		items: 1,
		//startPosition:8,
		//autoplay: true,
		loop: true,
		nav: true,
		navText: ["", ""],
		dotsContainer: ".owl-header .owl-dots",
		autoplayTimeout: 10000,
		onChanged: function (event) {
			var currentTextIndex = event.page.index;
			if (currentTextIndex != -1){
				$(event.target).trigger('stop.owl.autoplay');
				$(event.target).trigger('play.owl.autoplay');
				// if ($('.section-4 .owlTexts p').length == 9){
				// 	$('.section-4 .owlTexts p').eq(8).remove();
				// 	owl4.trigger('remove.owl.carousel', 8);
				// }
				$('.section-4 p').removeClass('current');
				$('.section-4 p').eq(currentTextIndex).addClass('current');
			}
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
		dotsEach: true,
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
					owl4.trigger('to.owl.carousel', 0);
					owl4.trigger('play.owl.autoplay');
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

		// var videoId = $(this).attr('data-id');
		// var player = new YT.Player('player', {
		// 	height: '780',
		// 	width: '1280',
		// 	videoId: videoId,
		// 	playerVars: {
		// 		rel: 0
		// 	},
		// 	events: {
		// 		'onReady': onPlayerReady,
		// 		'onStateChange': onPlayerStateChange
		// 	}
		// });

		// function onPlayerReady(event) {
		// 	event.target.playVideo();
		// }

		// function onPlayerStateChange(event) {
		// 	if (event.data === 0) {
		// 		$('#youtubeModal').modal('hide')
		// 	}
		// }

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

	$("#article-customer").on('hide.bs.modal', function () {
		var iframes = $("#article-customer iframe");
		for(var i = 0; i <= iframes.length; i++) {
			$(iframes[i]).attr('src', $(iframes[i]).attr('src'));			
		}

		var videos = $("#article-customer video");
		for(var i = 0; i <= videos.length; i++) {
			$(videos[i]).attr('src', $(videos[i]).attr('src'));			
		}
	});

	$("#article-product").on('hide.bs.modal', function () {
		var iframes = $("#article-product iframe");
		for(var i = 0; i <= iframes.length; i++) {
			$(iframes[i]).attr('src', $(iframes[i]).attr('src'));			
		}

		var videos = $("#article-product video");
		for(var i = 0; i <= videos.length; i++) {
			$(videos[i]).attr('src', $(videos[i]).attr('src'));			
		}
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


	var labelCardBonusArr = [
		7000, 10500, 14000, 20000, 24000,
		28000, 32000, 36000, 40000, 67500,
		90000, 135000, 180000, 250000, 300000,
		350000,	400000,	450000,	500000,	750000,
		900000,	1050000, 1200000, 1750000, 2100000,
		2800000, 4000000, 4800000, 5600000, 7200000,
		8100000, 10000000
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

	$('.label-group').click(function (e, param) {
		e.preventDefault();
		if ($(this).find('.package-select').length > 0) {
			
			var value=$(this).find('.label-card .row:nth-child(2) .package-select').attr('total');
			$(".single-notice .package").html(value + " BCT");
			// $(".single-notice .package").html($(this).find('.label-card .row:nth-child(2) .package-select > span')[0].childNodes[0].data + "BCT");
		}
		else {
			var value=$(this).find('.label-card .row:nth-child(2) div').attr('total');
			// $(".single-notice .package").html($(this).find('.label-card .row:nth-child(2) div')[0].childNodes[0].data + "BCT");
			$(".single-notice .package").html(value + " BCT");
		}

		$('.label-group').find('.label-card').removeClass('hover');

		if ($(this).hasClass('checked')) {
			if (param == "no-hidden") return;
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


	$('.modal .close').click(function (e) {
		$('.modal').modal('hide')
	});

	if ($('[data-fancybox="gallery"]').length){
		$('[data-fancybox="gallery"]').fancybox({
			btnTpl: {
				arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"></button>',
				arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"></button>',
			},
		});
	}

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

var html=[];

var packages = [
	{
		bct: 3000,
		bonus: 300,
		usd: 300,
		total: 3300
	},
	{
		bct: 6000,
		bonus: 1500,
		usd: 600,
		total: 7500
	},
	{
		bct: 10000,
		bonus: 3500,
		usd: 100,
		total: 13500
	},
	{
		bct: 20000,
		bonus: 7000,
		usd: 2000,
		total: 27000
	},
	{
		bct: 30000,
		bonus: 10500,
		usd: 3000,
		total: 40500
	},
	{
		bct: 40000,
		bonus: 14000,
		usd: 4000,
		total: 54000
	},
	{
		bct: 50000,
		bonus: 20000,
		usd: 5000,
		total: 70000
	},
	{
		bct: 60000,
		bonus: 24000,
		usd: 6000,
		total: 84000
	},
	{
		bct: 70000,
		bonus: 28000,
		usd: 7000,
		total: 98000
	},
	{
		bct: 80000,
		bonus: 32000,
		usd: 8000,
		total: 112000
	},
	{
		bct: 90000,
		bonus: 36000,
		usd: 9000,
		total: 126000
	},
	{
		bct: 100000,
		bonus: 40000,
		usd: 10000,
		total: 140000
	},
	{
		bct: 150000,
		bonus: 67500,
		usd: 15000,
		total: 217000
	},
	{
		bct: 200000,
		bonus: 90000,
		usd: 20000,
		total: 290000
	},
	{
		bct: 300000,
		bonus: 135000,
		usd: 30000,
		total: 435000
	},
	{
		bct: 400000,
		bonus: 180000,
		usd: 40000,
		total: 580000
	},
	{
		bct: 500000,
		bonus: 250000,
		usd: 50000,
		total: 750000
	},
	{
		bct: 600000,
		bonus: 300000,
		usd: 60000,
		total: 900000
	},
	{
		bct: 700000,
		bonus: 350000,
		usd: 70000,
		total: 1050000
	},
	{
		bct: 800000,
		bonus: 400000,
		usd: 80000,
		total: 1200000
	},
	{
		bct: 900000,
		bonus: 450000,
		usd: 90000,
		total: 1350000
	},
	{
		bct: 1000000,
		bonus: 500000,
		usd: 100000,
		total: 1500000
	},
	{
		bct: 1000000,
		bonus: 500000,
		usd: 100000,
		total: 1500000
	},
	{
		bct: 1250000,
		bonus: 750000,
		usd: 125000,
		total: 2000000
	},
	{
		bct: 1500000,
		bonus: 900000,
		usd: 150000,
		total: 2400000
	},
	{
		bct: 1750000,
		bonus: 1050000,
		usd: 175000,
		total: 2800000
	},
	{
		bct: 2000000,
		bonus: 1200000,
		usd: 200000,
		total: 3200000
	},
	{
		bct: 2000000,
		bonus: 1200000,
		usd: 200000,
		total: 3200000
	},
	{
		bct: 2500000,
		bonus: 1750000,
		usd: 250000,
		total: 4250000
	},
	{
		bct: 3000000,
		bonus: 2100000,
		usd: 300000,
		total: 5100000
	},
	{
		bct: 4000000,
		bonus: 2800000,
		usd: 400000,
		total: 6800000
	},
	{
		bct: 5000000,
		bonus: 4000000,
		usd: 500000,
		total: 9000000
	},
	{
		bct: 6000000,
		bonus: 4800000,
		usd: 600000,
		total: 10800000
	},
	{
		bct: 7000000,
		bonus: 5600000,
		usd: 700000,
		total: 12600000
	},
	{
		bct: 8000000,
		bonus: 7200000,
		usd: 800000,
		total: 15200000
	},
	{
		bct: 9000000,
		bonus: 8100000,
		usd: 900000,
		total: 17100000
	},
	{
		bct: 10000000,
		bonus: 10000000,
		usd: 1000000,
		total: 20000000
	}
]
packages.forEach(function(item, i){
	if (i > 2) {
		html.push('<li bct="'+ item.bct + '" bonus="'+ item.bct + '" total="'+ Number(item.bct*2).toLocaleString('en-US') + '" usd="'+ Number(item.usd).toLocaleString('en-US') + '">' + Number(item.bct).toLocaleString('en-US') + ' <span class="text-blue">+ '+ Number(item.bct).toLocaleString('en-US') + ' bonus</span></li>');
	}
});

$('.package-select ul').html(html.join(''));

var lists = $('.package-select');

lists.on('click',function(e) {

	e.stopPropagation();
	e.preventDefault()
	if($(this).find('ul').hasClass('hidden')) {
		$(this).find('ul').removeClass('hidden');
	}
	else {
		$(this).find('ul').addClass('hidden');
	}
	var $tgt = $(e.target);
	if ($tgt.is('li')) {
		$('.package-select > span').html($tgt.html());
		var value=$tgt.attr('total');
		$('.package-select').attr('total', value);
		$(this).closest('.label-group').find('.label-card .row:last-child div').html("$" + $tgt.attr('usd'));
		$(".terminal-count").html(parseInt($tgt.attr('usd').replace(/,/g, "")) / 1000);
		$(".single-notice .package").html(value);
		$(this).closest('.label-group').trigger('click', ['no-hidden']);
	}
})
$(document).click(function(e) {
	$('.package-select').find('ul').addClass('hidden');
});
	
$(".button.apply").click(() => {
	$("form.order-1").addClass("loading");
	setTimeout(() => {
		$("form.order-1").removeClass("loading");
		$("p.text-danger").removeClass("hidden");
	}, 2200);
});

$('form.order-1 div.form-group input').keypress(function (e) {
	var key = e.charCode || e.keyCode || 0;
	if (key == 13) {
		$("a.button.apply").trigger("click");
		e.preventDefault();
	}
});

console.log("countries", countries);
var countries_list = '';
for (var i = 0; i < countries.length; i++) {
	if (countries[i].name == "United States") {
	countries_list += `
	<option selected>` + countries[i].name + `</option>
	`;
	}
	else {
	countries_list += `
	<option>` + countries[i].name + `</option>
	`;
	}
}
$(".basic-select.country").html(countries_list);

$('select').selectize();

$('ul.order-nav li').click(function () {
	var currentIndex = $("ul.order-nav li.current").index();
	var index = $(this).index();
	if (index <= currentIndex) {
		$('ul.order-nav li').removeClass('current done');
		$(this).addClass('current');
		$('.tab-contents section').removeClass('current');
		$('.tab-contents section').eq(index).addClass('current');
		for(var i = 0; i < index; i++) {
			$('ul.order-nav li').eq(i).addClass('done');
		}
	}
});

function goTab(index, param) {
	$('ul.order-nav li').removeClass('current done');
	$('ul.order-nav li').eq(index).addClass('current');
	$('.tab-contents section').removeClass('current');
	$('.tab-contents section').eq(index).addClass('current');
	for(var i = 0; i < index; i++) {
		$('ul.order-nav li').eq(i).addClass('done');
	}
	if (param != null) {
		$('.tab-contents section.current div.container').addClass('hidden');
		$('.tab-contents section.current div.container').eq(param).removeClass('hidden');
	}
}