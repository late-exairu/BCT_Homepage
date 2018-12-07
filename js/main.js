
// Vimeo mode as video player.
var options = {
    id: 303372392,
    height: '780',
    width: '1280',
    title: false,
    byline: false,
    portrait: false,
    loop: false
};

var player = new Vimeo.Player('bigPlayer', options);

player.on('ended', function() {
    $('#videoOverlay').removeClass('hidden');
});

$('#videoOverlay').click(function () {
    player.play().then(function() {
        $('#videoOverlay').addClass('hidden');
    });
});

// order tab page
$(".button.apply").click(() => {
	$(".section-12 form").addClass("loading");
	setTimeout(() => {
		$(".section-12 form").removeClass("loading");
		$("p.text-danger").removeClass("hidden");
	}, 2200);
});

$('.section-12 form div.form-group input').keypress(function (e) {
	var key = e.charCode || e.keyCode || 0;
	if (key == 13) {
		$("button.button.apply").trigger("click");
		e.preventDefault();
	}
});

var playFlag = false;
var playIndex = 0;
var	videoIDs = [
    303414850, 303370757, 303440052,
    303374546, 303410008, 303375046,
    303373363, 303374352, 303401223,
    303403824, 303403806, 303403841
]
var options2 = {
    id: videoIDs[playIndex],
    height: '488',
    width: '1280',
    title: false,
    byline: false,
    portrait: false,
    autoplay: true,
    loop: true,
    muted: true,
};

var player2 = new Vimeo.Player('video-player', options2);

var dots_list = '<button role="button" class="owl-dot active"><span></span></button>';
for (var i = 1; i < videoIDs.length; i++) {
    dots_list += '<button role="button" class="owl-dot"><span></span></button>';
}
$(".section-11 .owl-dots").html(dots_list);

function player2LoadVideo() {
    player2.getVolume().then(function(originVolume) {
        player2.loadVideo(videoIDs[playIndex]).then(function(id) {
            player2.setVolume(originVolume).then(function(volume) {
            }).catch(function(error) {
            // an error occurred
            });
        })
    }).catch(function(error) {
        // an error occurred
    });
    $('.section-11 .owl-dots .owl-dot').removeClass('active');
    $('.section-11 .owl-dots .owl-dot:eq(' + playIndex + ')').addClass('active');
}

$('.section-11 button.left-arrow').click(function () {
    playIndex = (playIndex == 0) ? videoIDs.length - 1 : (playIndex - 1);
    player2LoadVideo();
});

$('.section-11 button.right-arrow').click(function () {
    playIndex = (playIndex == videoIDs.length - 1) ? 0 : (playIndex + 1);
    player2LoadVideo();
});

$('.section-11 .owl-dots .owl-dot').click(function () {
    playIndex = +$(this).index();
    player2LoadVideo();
});

window.addEventListener('scroll', function(e) {
    if (!playFlag && window.scrollY > $(".section-11").offset().top - $(".section-11").height() * 0.5) {
        player2.play().then(function() {
            setTimeout(() => {
                $('.initial-image').addClass('hidden');
            }, 300);
            playFlag = true;
        });
    }
});
