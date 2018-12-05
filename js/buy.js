// functions
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function getUrlParam(parameter, defaultvalue) {
    var urlparameter = defaultvalue;
    if(window.location.href.indexOf(parameter) > -1) {
        urlparameter = getUrlVars()[parameter];
	}
    return urlparameter;
}

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
	if (index == 0) {
		$(".order-back").addClass("hidden");
	}
	else {
		$(".order-back").removeClass("hidden");
	}
}


// order form header functionality
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

	if (index == 0) {
		$(".order-back").addClass("hidden");
	}
	else {
		$(".order-back").removeClass("hidden");
	}
});

$(".order-back").click(function () {
	var currentIndex = $("ul.order-nav li.current").index();
	if (currentIndex > 0) currentIndex--;

	$('ul.order-nav li').removeClass('current done');
	$('ul.order-nav li').eq(currentIndex).addClass('current');
	$('.tab-contents section').removeClass('current');
	$('.tab-contents section').eq(currentIndex).addClass('current');
	for(var i = 0; i < currentIndex; i++) {
		$('ul.order-nav li').eq(i).addClass('done');
	}

	if (currentIndex == 0) {
		$(".order-back").addClass("hidden");
	}
	else {
		$(".order-back").removeClass("hidden");
	}
});


// skip one stage of order form when it come from latest section of main page.
if (getUrlParam("order", 0) == 2) {
	goTab(0, 1);
}


// order tab page
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


// payment tab page
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


// coin tab page
var packagesHtml=[];

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
		packagesHtml.push('<li bct="'+ item.bct + '" bonus="'+ item.bct + '" total="'+ Number(item.bct*2).toLocaleString('en-US') + '" usd="'+ Number(item.usd).toLocaleString('en-US') + '">' + Number(item.bct).toLocaleString('en-US') + ' <span class="text-blue">+ '+ Number(item.bct).toLocaleString('en-US') + ' bonus</span></li>');
	}
});

$('.package-select ul').html(packagesHtml.join(''));

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
		var value = $tgt.attr('total');
		$('.package-select').attr('total', value);
		$(this).closest('.label-group').find('.label-card .row:last-child div').html("$" + $tgt.attr('usd'));
		$(".terminal-count").html(parseInt($tgt.attr('usd').replace(/,/g, "")) / 1000);
		$(".single-notice .package").html(value);
		$(this).closest('.label-group').trigger('click', ['no-hidden']);
	}
});

$(document).click(function(e) {
	$('.package-select').find('ul').addClass('hidden');
});


// shipping tab page
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