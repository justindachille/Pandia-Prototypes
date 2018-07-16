export function resizeHeader() {
	var window_width = $(window).width();
	var window_height = window.innerHeight;
	var header_height = $(".default-header").height();
	var header_height_static = $(".site-header.static").outerHeight();
	var fitscreen = window_height - header_height;
	var top = 0;
	var duration = 500;


	$(".fullscreen").css("height", window_height);
	$(".fitscreen").css("height", fitscreen);

	var header = angular.element(document.getElementById("header"));
	$document.scrollTop(top, duration);
	$document.scrolToElement(someElement, 0, duration);
	console.log("scrolled");

	function invertedEasingFunction(x) {
		return 1 - x;
	}
	angular.module('myApp', ['duScroll']).value('duScrollEasing', invertedEasingFunction);
}
