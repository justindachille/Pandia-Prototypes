(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./src/styles.css":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/postcss-loader/lib??embedded!./src/styles.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n\tfont-family: \"Futura\";\n\tsrc: url(\"/assets/fonts/futura medium condensed bt.ttf\") format(\"truetype\");\n}\n\n:root {\n\t--header-color: #20509e;\n}\n\nhtml,\nbody {\n\tfont-family: \"Lato\", sans-serif;\n\tcolor: #777;\n\t-webkit-font-smoothing: antialiased;\n\tfont-smoothing: antialiased;\n\tfont-size: 14px;\n\tfont-weight: 300;\n\tline-height: 1.625em;\n\tposition: relative;\n/*\twidth: 100%;*/\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n\tfont-family: \"Futura\", sans-serif;\n\tcolor: var(--header-color);\n\ttext-rendering: optimizeLegibility;\n\tmargin: 0;\n\tfont-weight: 500;\n\t/*\tfont-weight: 600*/\n}\n\nh1 {\n\tfont-size: 70px;\n}\n\nh2 {\n\tfont-size: 48px;\n}\n\nh3 {\n\tfont-size: 30px;\n}\n\nh4 {\n\tfont-size: 24px;\n}\n\nh5 {\n\tfont-size: 20px;\n}\n\nh6 {\n\tfont-size: 14px;\n}\n\np {\n\tfont-size: 15.7px;\n\tcolor: #75849a;\n\tline-height: 1.6;\n}\n\nimg {\n\tmax-width: 100%;\n}\n\na:hover,\na:focus {\n\ttext-decoration: none;\n\toutline: none;\n}\n\nul,\nol {\n\tpadding: 0;\n\tmargin: 0;\n}\n\ninput:focus,\nselect:focus,\nbutton:focus,\ntextarea:focus {\n\toutline: none;\n}\n\n/* Preloder */\n\n#preloder {\n\tposition: fixed;\n\twidth: 100%;\n\theight: 100%;\n\ttop: 0;\n\tleft: 0;\n\tz-index: 999999;\n\tbackground: #fff;\n}\n\n.loader {\n\twidth: 40px;\n\theight: 40px;\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\tmargin-top: -13px;\n\tmargin-left: -13px;\n\tborder-radius: 60px;\n\tanimation: loader 0.8s linear infinite;\n\t-webkit-animation: loader 0.8s linear infinite;\n}\n\n@keyframes loader {\n\t0% {\n\t\t-webkit-transform: rotate(0deg);\n\t\ttransform: rotate(0deg);\n\t\tborder: 4px solid #f44336;\n\t\tborder-left-color: transparent;\n\t}\n\t50% {\n\t\t-webkit-transform: rotate(180deg);\n\t\ttransform: rotate(180deg);\n\t\tborder: 4px solid #673ab7;\n\t\tborder-left-color: transparent;\n\t}\n\t100% {\n\t\t-webkit-transform: rotate(360deg);\n\t\ttransform: rotate(360deg);\n\t\tborder: 4px solid #f44336;\n\t\tborder-left-color: transparent;\n\t}\n}\n\n@-webkit-keyframes loader {\n\t0% {\n\t\t-webkit-transform: rotate(0deg);\n\t\tborder: 4px solid #f44336;\n\t\tborder-left-color: transparent;\n\t}\n\t50% {\n\t\t-webkit-transform: rotate(180deg);\n\t\tborder: 4px solid #673ab7;\n\t\tborder-left-color: transparent;\n\t}\n\t100% {\n\t\t-webkit-transform: rotate(360deg);\n\t\tborder: 4px solid #f44336;\n\t\tborder-left-color: transparent;\n\t}\n}\n\n.spad {\n\tpadding-top: 100px;\n\tpadding-bottom: 90px;\n}\n\n.bottom-pad {\n\tpadding-bottom: 90px;\n}\n\n.section-title {\n\tmargin-bottom: 60px;\n}\n\n.section-title h2 {\n\tmargin-bottom: 20px;\n\tpadding: 20px;\n}\n\n.section-title p {\n\tmargin-bottom: 0;\n\tfont-size: 24px;\n}\n\n.text-white {\n\tcolor: #fff !important;\n}\n\n.text-black {\n\tcolor: #000 !important;\n}\n\n.text-align-center {\n\ttext-align: center;\n}\n\n.text-bold {\n\tfont-weight: bold;\n}\n\n.set-bg {\n\tbackground-repeat: no-repeat;\n\tbackground-size: cover;\n\tbackground-position: center 0;\n}\n\n.relative {\n\tposition: relative\n}\n\n.links-debug {\n\tz-index: 99999;\n}\n\n.section-shadow {\n\tbox-shadow: 0px 0px 48px 10px rgba(0, 0, 0, 1);\n\tposition: relative;\n}\n\n.bottom-shadow {\n\tbox-shadow: 0px 35px 60px -12px rgba(0, 0, 0, 1);\n\tposition: relative;\n}\n\n.section-inset-shadow {\n\tbox-shadow: inset 0px 88px 64px -80px rgba(0, 0, 0, 0.75), inset 0px -88px 64px -80px rgba(0, 0, 0, 0.75);\n\tposition: relative;\n\tz-index: 2;\n}\n\n/* Header */\n\n#logo {\n\theight: 30px;\n\twidth: 95px;\n}\n\n#logo img {\n\twidth: 100%;\n\theight: auto;\n}\n\n.header {\n\tpadding: 14px 0;\n\tposition: fixed;\n\tleft: 0;\n\ttop: 0;\n\tright: 0;\n\ttransition: all 0.5s;\n\tz-index: 3;\n}\n\n.header.header-scrolled {\n\tbackground: rgba(0, 0, 0, 0.8);\n\ttransition: all 0.5s\n}\n\n@media (max-width: 673px) {\n\t#logo {\n\t\tmargin-left: 20px\n\t}\n}\n\n.header #logo h1 {\n\tfont-size: 34px;\n\tmargin: 0;\n\tpadding: 0;\n\tline-height: 1;\n\tfont-weight: 700;\n\tletter-spacing: 3px\n}\n\n.header #logo h1 a,\n.header #logo h1 a:hover {\n\tcolor: #fff;\n\tpadding-left: 10px;\n\tborder-left: 4px solid #3bacf0\n}\n\n.header #logo img {\n\tpadding: 0;\n\tmargin: 0\n}\n\n@media (max-width: 768px) {\n\t.header #logo h1 {\n\t\tfont-size: 28px\n\t}\n\t.header #logo img {\n\t\tmax-height: 40px\n\t}\n}\n\n.ticker-btn {\n\tbackground: #88d200;\n\tcolor: #fff;\n\tpadding: 6px 20px !important;\n\ttext-transform: uppercase\n}\n\n.nav-menu,\n.nav-menu * {\n\tmargin: 0;\n\tpadding: 0;\n\tlist-style: none\n}\n\n.nav-menu ul {\n\tposition: absolute;\n\tdisplay: none;\n\ttop: 100%;\n\tleft: 0;\n\t/*\tz-index: 5*/\n}\n\n.nav-menu li {\n\tposition: relative;\n\twhite-space: nowrap\n}\n\n.nav-menu > li {\n\tfloat: left\n}\n\n.nav-menu li:hover > ul,\n.nav-menu li.sfHover > ul {\n\tdisplay: block\n}\n\n.nav-menu ul ul {\n\ttop: 0;\n\tleft: 100%\n}\n\n.nav-menu ul li {\n\tmin-width: 180px;\n\ttext-align: left;\n}\n\n.sf-arrows .sf-with-ul {\n\tpadding-right: 30px\n}\n\n.sf-arrows .sf-with-ul:after {\n\tcontent: \"\\f107\";\n\tposition: absolute;\n\tright: 15px;\n\tfont-family: FontAwesome;\n\tfont-style: normal;\n\tfont-weight: normal\n}\n\n.sf-arrows ul .sf-with-ul:after {\n\tcontent: \"\\f105\"\n}\n\n#nav-menu-container {\n\tmargin: 0\n}\n\n@media (min-width: 1024px) {\n\t#nav-menu-container {\n\t\tpadding-right: 60px\n\t}\n}\n\n@media (max-width: 768px) {\n\t#nav-menu-container {\n\t\tdisplay: none\n\t}\n}\n\n.nav-menu a {\n\t/*\tz-index: 6;*/\n\tpadding: 6px 10px;\n\ttext-decoration: none;\n\tdisplay: inline-block;\n\tcolor: #fff !important;\n\tfont-weight: 400;\n\tfont-size: 12px;\n\ttext-transform: uppercase;\n\toutline: none;\n\tcursor: pointer;\n}\n\n.nav-menu > li {\n\tmargin-left: 10px\n}\n\n.nav-menu ul {\n\tmargin: 16px 0 0 0;\n\tpadding: 10px;\n\tbox-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);\n\tbackground: #fff\n}\n\n.nav-menu ul li {\n\ttransition: 0.3s\n}\n\n.nav-menu ul li a {\n\tpadding: 10px;\n\tcolor: #333;\n\ttransition: 0.3s;\n\tdisplay: block;\n\tfont-size: 12px;\n\ttext-transform: none\n}\n\n.nav-menu ul li:hover > a {\n\tcolor: #3bacf0\n}\n\n.nav-menu ul ul {\n\tmargin: 0\n}\n\n#mobile-nav-toggle {\n\tposition: fixed;\n\tright: 15px;\n\tz-index: 10;\n\ttop: 16px;\n\tborder: 0;\n\tbackground: none;\n\tfont-size: 24px;\n\tdisplay: none;\n\ttransition: all 0.4s;\n\toutline: none;\n\tcursor: pointer\n}\n\n#mobile-nav-toggle i {\n\tcolor: #fff;\n\tfont-weight: 900\n}\n\n@media (max-width: 800px) {\n\t#mobile-nav-toggle {\n\t\tdisplay: inline\n\t}\n\t#nav-menu-container {\n\t\tdisplay: none\n\t}\n}\n\n#mobile-nav {\n\tposition: fixed;\n\ttop: 0;\n\tpadding-top: 18px;\n\tbottom: 0;\n\tz-index: 9;\n\tbackground: rgba(0, 0, 0, 0.8);\n\tleft: -260px;\n\twidth: 260px;\n\toverflow-y: auto;\n\ttransition: 0.4s\n}\n\n#mobile-nav ul {\n\tpadding: 0;\n\tmargin: 0;\n\tlist-style: none\n}\n\n#mobile-nav ul li {\n\tposition: relative;\n\tcursor: pointer;\n}\n\n#mobile-nav ul li a {\n\tcolor: #fff;\n\tfont-size: 13px;\n\ttext-transform: uppercase;\n\toverflow: hidden;\n\tpadding: 10px 22px 10px 15px;\n\tposition: relative;\n\ttext-decoration: none;\n\twidth: 100%;\n\tdisplay: block;\n\toutline: none;\n\tfont-weight: 700\n}\n\n#mobile-nav ul li a:hover {\n\tcolor: #fff\n}\n\n#mobile-nav ul li li {\n\tpadding-left: 30px\n}\n\n#mobile-nav ul .menu-has-children i {\n\tposition: absolute;\n\tright: 0;\n\tz-index: 6;\n\tpadding: 15px;\n\tcursor: pointer;\n\tcolor: #fff\n}\n\n#mobile-nav ul .menu-has-children i.fa-chevron-up {\n\tcolor: #3bacf0\n}\n\n#mobile-nav ul .menu-has-children li a {\n\ttext-transform: none\n}\n\n#mobile-nav ul .menu-item-active {\n\tcolor: #3bacf0\n}\n\n#mobile-body-overly {\n\twidth: 100%;\n\theight: 100%;\n\tz-index: 7;\n\ttop: 0;\n\tleft: 0;\n\tposition: fixed;\n\tbackground: rgba(0, 0, 0, 0.7);\n\tdisplay: none\n}\n\nbody.mobile-nav-active {\n\toverflow: hidden\n}\n\nbody.mobile-nav-active #mobile-nav {\n\tleft: 0\n}\n\nbody.mobile-nav-active #mobile-nav-toggle {\n\tcolor: #fff\n}\n\n/* Banner */\n\n.overlay {\n\tposition: absolute;\n\tleft: 0;\n\tright: 0;\n\ttop: 0;\n\tbottom: 0\n}\n\n/*\n.overlay-bg {\n\tbackground: rgba(0, 0, 0, 0.5);\n\topacity: .8;\n}\n*/\n\n#main-banner {\n\tpadding-bottom: 20px;\n}\n\n.banner-content {\n\tmargin-top: -100px;\n}\n\n.banner-area {\n\tbackground: url('header-bg.jpg')center;\n\tbackground-size: cover\n}\n\n.banner-area .overlay-bg {\n\tbackground-color: rgba(59, 172, 240, 0.9)\n}\n\n/* Options */\n\n.laptop-container img {\n\tz-index: 1;\n}\n\n.laptop-container {\n\tmargin-top: -20em;\n}\n\n@media (max-width: 960px) {\n\t.laptop-container {\n\t\tmargin-top: -16em;\n\t}\n}\n\n@media (max-width: 480px) {\n\t.laptop-container {\n\t\tmargin-top: -10em\n\t}\n}\n\n.option-header {\n\tpadding: 20px;\n\tpadding-top: 48px;\n}\n\n.option-header h2 {\n\tcolor: var(--header-color);\n}\n\n.option-section .container {\n\tmargin-bottom: -45px;\n}\n\n.option {\n\tmargin-bottom: 45px;\n\ttext-align: center;\n\tbackground-color: #f9f9ff;\n\tpadding: 45px;\n\tborder-radius: 15px;\n\ttransition: all 0.3s ease 0s\n}\n\n.option i,\n.option h3 {\n\tcolor: #222\n}\n\n.option .fas {\n\tfont-size: 34px;\n}\n\n.option:hover {\n\tbackground-color: white;\n\tbox-shadow: 0px 0px 20px 10px rgba(59, 172, 240, 0.2);\n}\n\n.option:hover .fas,\n.option:hover h3 {\n\tcolor: lightskyblue;\n}\n\n.option i {\n\tfont-size: 48px;\n\tpadding-top: 10px;\n\tmargin-bottom: 20px;\n}\n\n.option h3 {\n\tmargin-bottom: 15px;\n}\n\n/* Process */\n\n.process {\n\tcolor: #fff !important;\n}\n\n.gradient-bg {\n\tbackground-image: linear-gradient(to right, #073c8e, #005ba3, #0077ac, #0090ac, #19a8a8);\n}\n\n.feature {\n\tmargin-bottom: 48px;\n}\n\n.feature i {\n\tfont-size: 48px;\n\tfloat: left;\n\tpadding-top: 10px;\n\tmargin-right: 25px;\n\tcolor: white;\n}\n\n.feature h5 {\n\tfont-size: 24px;\n\ttext-align: left;\n\tmargin-bottom: 15px;\n\tcolor: white;\n}\n\n.feature p {\n\ttext-align: left;\n\tmargin-bottom: 15px;\n\ttext-indent: 0;\n\tcolor: white;\n}\n\n.feature .feature-text {\n\tmargin-left: 72px;\n}\n\n/* Team */\n\n.team-section {\n\tbackground: #f3f7f9;\n\toverflow: hidden;\n}\n\n.team-members {\n\tmargin: 0 -10px;\n}\n\n.member {\n\tbackground: #fff;\n\tflex-grow: .33;\n\tdisplay: inline-block;\n\tmargin: 0 10px;\n\ttext-align: center;\n\tpadding: 50px 10px;\n\tbox-shadow: 1px 1px 1px rgba(33, 54, 61, 0.15);\n\tborder-radius: 10px;\n\tposition: relative;\n\tflex: 1;\n}\n\n@media screen and (max-width: 990px) {\n\t#member-container {\n\t\tflex-wrap: wrap;\n\t}\n\t.member:first-child {\n\t\tflex-basis: 100%;\n\t}\n\t.member:nth-child(2) {\n\t\tflex-basis: 100%;\n\t}\n}\n\n.member h2 {\n\tfont-size: 22px;\n\tmargin-bottom: 5px;\n}\n\n.member span {\n\tfont-size: 14px;\n\tcolor: #75849a;\n\tdisplay: block;\n}\n\n.member .member-text {\n\ttransition: all 0.4s;\n\topacity: 1;\n}\n\n.member:hover {\n\tbox-shadow: 1px 14px 43px rgba(33, 54, 61, 0.15);\n}\n\n.member:hover .member-info {\n\topacity: 1;\n}\n\n.member:hover .member-text {\n\topacity: 0;\n}\n\n.member-img {\n\twidth: 230px;\n\theight: 230px;\n\tdisplay: inline-block;\n\tborder-radius: 50%;\n\tmargin-bottom: 25px;\n}\n\n.member-social {\n\tpadding-top: 25px;\n\tbackground: #fff;\n\tposition: relative;\n\tz-index: 1;\n}\n\n.member-social a {\n\twidth: 50px;\n\theight: 50px;\n\tdisplay: inline-block;\n\tborder-radius: 50%;\n\tbackground: #cbd3df;\n\tcolor: #fff;\n\tpadding-top: 13px;\n\tmargin: 0 8px;\n}\n\n.member-meta {\n\tpadding-left: 85px;\n}\n\n.member-info {\n\tpadding: 50px 20px 10px;\n\tposition: absolute;\n\twidth: 100%;\n\ttop: 0;\n\tleft: 0;\n\ttext-align: left;\n\topacity: 0;\n\ttransition: all 0.4s;\n\theight: 380px;\n\toverflow-y: auto;\n}\n\n.member-info p {\n\tdisplay: block;\n\tpadding-top: 25px;\n\tmargin-bottom: 0;\n\tfont-size: 16px;\n\tline-height: 1.6;\n\tcolor: #75849a;\n}\n\n.member-img.mf {\n\twidth: 60px;\n\theight: 60px;\n\topacity: 1;\n\tfloat: left;\n\tmargin-bottom: 0;\n}\n\n/* Blog Section */\n\n.blog-section {\n\tbackground: #f3f7f9;\n}\n\n.blog-section a {\n\tmargin-bottom: 0;\n}\n\n.blog-text {\n\tbackground: white;\n\tpadding: 30px;\n\tbox-shadow: 0px 23px 49px 0px rgba(223, 229, 231, 1);\n}\n\n/* Footer Section */\n\n.footer-column {\n\tmargin-left: 100px;\n}\n\n.footer-title {\n\tmargin-bottom: 30px;\n\tfont-size: 24px;\n}\n\n.footer-section span {\n\tcolor: #acb9cc;\n}\n\n.footer-section ul {\n\tlist-style: none;\n}\n\n.footer-section ul a {\n\tfont-size: 18px;\n\tcolor: #75849a;\n\tdisplay: block;\n\tmargin-bottom: 12px;\n}\n\n.footer-section ul li:last-child a {\n\tmargin-bottom: 0;\n}\n\n.social a {\n\twidth: 40px;\n\theight: 40px;\n\tborder-radius: 50%;\n\tcolor: #fff;\n\tdisplay: inline-block;\n\tmargin-right: 10px;\n\ttext-align: center;\n\tpadding-top: 10px;\n\tfont-size: 18px;\n}\n\n.social a:last-child {\n\tmargin-right: 0;\n}\n\n.social .facebook {\n\tbackground: #4b6cd0;\n}\n\n.social .google {\n\tbackground: #f03b3b;\n}\n\n.social .instagram {\n\tbackground: #bb8950;\n}\n\n.social .twitter {\n\tbackground: #49a7f3;\n}\n\n.social .yelp {\n\tbackground: #D32323;\n}\n\n.social .linkedin {\n\tbackground: #4875B4;\n}\n\n.footer-bottom {\n\tborder-top: 1px solid #ebebeb;\n\tpadding: 30px 0;\n}\n\n.footer-nav {\n\tlist-style: none;\n}\n\n.footer-nav li {\n\tdisplay: inline-block;\n}\n\n.footer-nav li a {\n\tcolor: #75849a;\n\tfont-size: 14px;\n\tmargin-left: 20px;\n}\n\n/* About Area */\n\n.about-area {\n\tbackground: rgba(249, 249, 255, 1);\n\t/* Old Browsers */\n\t/* FF3.6+ */\n\tbackground: -webkit-gradient(left top, right top, color-stop(0%, rgba(249, 249, 255, 1)), color-stop(25%, rgba(255, 255, 255, 1)), color-stop(51%, rgba(249, 249, 255, 1)), color-stop(80%, rgba(255, 255, 255, 1)), color-stop(100%, rgba(249, 249, 255, 1)));\n\t/* Chrome, Safari4+ */\n\t/* Chrome10+,Safari5.1+ */\n\t/* Opera 11.10+ */\n\t/* IE 10+ */\n\tbackground: linear-gradient(to right, rgba(249, 249, 255, 1) 0%, rgba(255, 255, 255, 1) 25%, rgba(249, 249, 255, 1) 51%, rgba(255, 255, 255, 1) 80%, rgba(249, 249, 255, 1) 100%);\n\t/* W3C */\n\tfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f9f9ff', endColorstr='#f9f9ff', GradientType=1);\n\t/* IE6-9 */\n}\n\n.about-area p {\n\tmargin-bottom: 20px;\n}\n\n.about-area h3 {\n\tmargin-bottom: 30px;\n}\n\n.img-text {\n\tmax-width: 40%;\n\tmargin-right: 20px;\n\tmargin-bottom: 20px;\n}\n\n.mt-20 {\n\tmargin-top: 20px;\n}"

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/raw-loader!../node_modules/postcss-loader/lib??embedded!./styles.css */ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\Github\Pandia-Prototypes\prototype1\src\styles.css */"./src/styles.css");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map