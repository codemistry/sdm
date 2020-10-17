(function ($) {
	"use strict";
	jQuery(document).ready(function ($) {
		new WOW().init();
		lightbox.option({
			'resizeDuration': 200,
			'wrapAround': true,
			alwaysShowNavOnTouchDevices: true
		})
	});


	// jQuery loading function starts          
	// jQuery(window).load(function () {

	// });
	$('[data-toggle="datepicker"]').datepicker();
}(jQuery));


var rellax = new Rellax('.rellax');

var mySwiper = new Swiper('.swiper-container-contact', {
	speed: 400,
	spaceBetween: 15,
	slidesPerView: 3,
	loop: true,
	autoplay: true,
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
	},
	breakpoints: {
		280: {
			slidesPerView: 1,
			spaceBetween: 1
		},
		479: {
			slidesPerView: 2,
			spaceBetween: 15
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 15
		}
	}
});

var landingTeam = new Swiper('.landing-team', {
	speed: 400,
	spaceBetween: 15,
	slidesPerView: 1,
	loop: true,
	autoplay: true,
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
	},
});


var videoSwiper = new Swiper('.landing-top', {
	speed: 400,
	spaceBetween: 0,
	slidesPerView: 1,
	loop: true,
	autoplay: false,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	on: {
		init: function () {
			console.log('swiper initialized');
			var currentVideo = $("[data-swiper-slide-index=" + this.realIndex + "]").find("video");
			currentVideo.trigger('play');
		},
	},

});

var sliderVideos = $(".bg-video video");

/* SWIPER API - Event will be fired after animation to other slide (next or previous) */
videoSwiper.on('slideChange', function () {
	console.log('slide changed');
	/* stop all videos (currentTime buggy without this loop idea - no "real" previousIndex) */
	sliderVideos.each(function (index) {
		this.currentTime = 0;
	});

	/* SWIPER GET CURRENT AND PREV SLIDE (AND VIDEO INSIDE) */
	var prevVideo = $("[data-swiper-slide-index=" + this.previousIndex + "]").find("video");
	var currentVideo = $("[data-swiper-slide-index=" + this.realIndex + "]").find("video");
	prevVideo.trigger('stop');
	currentVideo.trigger('play');
});

$(function () {
	var scene1 = document.getElementById('scene1');
	var scene2 = document.getElementById('scene2');
	var scene3 = document.getElementById('scene3');

	var parallaxInstance = new Parallax(scene1, {
		relativeInput: true
	});
	var parallaxInstance = new Parallax(scene2, {
		relativeInput: true
	});
	var parallaxInstance = new Parallax(scene3, {
		relativeInput: true
	});
});