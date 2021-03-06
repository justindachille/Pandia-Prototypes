/*eslint-env browser*/
$(window).on('load', function () {
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut();
	$("#preloder").delay(250).fadeOut("slow");

});

$(window).resize(function () {
	var window_width = $(window).width(),
		window_height = window.innerHeight,
		header_height = $(".default-header").height(),
		header_height_static = $(".site-header.static").outerHeight(),
		fitscreen = window_height - header_height;

	$(".fullscreen").css("height", window_height);
	$(".fitscreen").css("height", fitscreen);
});

$(document).ready(function () {
	"use strict";

	var window_width = $(window).width(),
		window_height = window.innerHeight,
		header_height = $(".default-header").height(),
		header_height_static = $(".site-header.static").outerHeight(),
		fitscreen = window_height - header_height;

	$(".fullscreen").css("height", window_height);
	$(".fitscreen").css("height", fitscreen);

	// Initiate superfish on nav menu
	$('.nav-menu').superfish({
		animation: {
			opacity: 'show',
			height: 'show'
		},
		speed: 400,
		autoArrows: false,
		delay: 400
	});

	// Mobile Navigation
	if ($('#nav-menu-container').length) {
		var $mobile_nav = $('#nav-menu-container').clone().prop({
			id: 'mobile-nav'
		});
		$mobile_nav.find('> ul').attr({
			'class': '',
			'id': ''
		});
		$('body').append($mobile_nav);
		$('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>');
		$('body').append('<div id="mobile-body-overly"></div>');
		$('#mobile-nav').find('.menu-has-children').prepend('<i class="lnr lnr-chevron-down"></i>');

		$(document).on('click', '.menu-has-children i', function (e) {
			$(this).next().toggleClass('menu-item-active');
			$(this).nextAll('ul').eq(0).slideToggle();
			$(this).toggleClass("lnr-chevron-up lnr-chevron-down");
		});

		$(document).on('click', '#mobile-nav-toggle', function (e) {
			$('body').toggleClass('mobile-nav-active');
			$('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
			$('#mobile-body-overly').toggle();
		});

		$(document).click(function (e) {
			var container = $("#mobile-nav, #mobile-nav-toggle");
			if (!container.is(e.target) && container.has(e.target).length === 0) {
				if ($('body').hasClass('mobile-nav-active')) {
					$('body').removeClass('mobile-nav-active');
					$('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
					$('#mobile-body-overly').fadeOut();
				}
			}
		});
	} else if ($("#mobile-nav, #mobile-nav-toggle").length) {
		$("#mobile-nav, #mobile-nav-toggle").hide();
	}

	// Smooth scroll for the menu and links with .scrollto classes
	$('.nav-menu a, #mobile-nav a, .scrollto').on('click', function () {
		if ($(this).parents('.nav-menu').length) {
			$('.nav-menu .menu-active').removeClass('menu-active');
			$(this).closest('li').addClass('menu-active');
		}

		if ($('body').hasClass('mobile-nav-active')) {
			$('body').removeClass('mobile-nav-active');
			$('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
			$('#mobile-body-overly').fadeOut();
		}
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			if (target.length) {
				var top_space = 0;

				if ($('#header').length) {
					top_space = $('#header').outerHeight();

					if (!$('#header').hasClass('header-fixed')) {
						top_space = top_space;
					}
				}

				$('html, body').animate({
					scrollTop: target.offset().top - top_space
				}, 1500, 'easeInOutExpo');

				return false;
			}
		}
	});

	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('#header').addClass('header-scrolled');
		} else {
			$('#header').removeClass('header-scrolled');
		}
	})
});

function scrollToElement(id) {
	if (window.location.href.includes("home")) {
		$.smoothScroll({
			scrollTarget: id
		});
	}
}