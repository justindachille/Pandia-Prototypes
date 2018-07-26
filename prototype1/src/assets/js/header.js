export function resizeHeader(path) {
	var window_width = $(window).width();
	var window_height = window.innerHeight;
	var header_height = $(".default-header").height();
	var header_height_static = $(".site-header.static").outerHeight();
	var fitscreen = window_height - header_height;
	var top = 0;
	var duration = 500;

	$(".fullscreen").css("height", window_height);
	$(".fitscreen").css("height", fitscreen);
	
	$.smoothScroll({
		scrollTarget: top,
	});
	if (path) {
		console.log(path);
	} else {
		console.log("no path");
	}
}