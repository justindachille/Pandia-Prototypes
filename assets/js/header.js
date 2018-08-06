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

	if (path) {
		console.log("path: " + path);
		if (path == "onActivate") {
			$.smoothScroll({
				scrollTarget: top,
			});
		}

		if (path == "onAnchorClick") {
			if (!window.location.href.includes("home")) {
				window.location.href = "/home";
			}
		}
	} else {
		console.log("no path");
	}
}
