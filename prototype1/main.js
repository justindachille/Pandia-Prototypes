(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Header Section -->\r\n\r\n<div id=\"top\"></div>\r\n<header class=\"header\" id=\"header\">\r\n\t<div class=\"container\">\r\n\t\t<div class=\"align-items-center justify-content-between d-flex\">\r\n\t\t\t<div id=\"logo\" class=\"align-items-center\">\r\n\t\t\t\t<a href=\"index.html\"><img src=\"/assets/img/logo.png\"></a>\r\n\t\t\t</div>\r\n\t\t\t<nav id=\"nav-menu-container\">\r\n\t\t\t\t<ul class=\"nav-menu\">\r\n\t\t\t\t\t<li class=\"menu-active\"><a class=\"links-debug\" routerLink=\"\">Home</a></li>\r\n\t\t\t\t\t<li><a class=\"links-debug\" routerLink=\"/about\">About Us</a></li>\r\n\t\t\t\t\t<li><a id=\"option-header-nav\" onClick=\"scrollToElement(options)\" (click)=\"onAnchorClick()\">Options</a></li>\r\n\t\t\t\t\t<li><a id=\"process-header-nav\" onClick=\"scrollToElement(process)\" (click)=\"onAnchorClick()\" >Process</a></li>\r\n\t\t\t\t\t<li><a id=\"team-header-nav\"onClick=\"scrollToElement(team)\" (click)=\"onAnchorClick()\">Team</a></li>\r\n\t\t\t\t\t<li><a id=\"blog-header-nav\" onClick=\"scrollToElement(blog)\" (click)=\"onAnchorClick()\">Blog</a></li>\r\n\t\t\t\t\t<li><a class=\"ticker-btn\" href=\"#\">Get Started</a></li>\r\n\t\t\t\t</ul>\r\n\t\t\t</nav>\r\n\t\t</div>\r\n\t</div>\r\n</header>\r\n\r\n<!-- End Header Section -->\r\n\r\n<router-outlet (activate)=\"onActivate($event)\" onload=\"onAnchorClick()\"></router-outlet>\r\n\r\n<!-- Footer Section -->\r\n\r\n<footer class=\"footer-section\" id=\"footer\">\r\n\t<div class=\"container\">\r\n\t\t<div class=\"footer-column d-flex justify-content-center mt-20\">\r\n\t\t\t<p class=\"text-center\">Telemedicine services provided by Pandia Medical Group, a medical corporation. <br>\r\n\t\t\t<span>Copyright &copy; 2016-<script type=\"text/javascript\">document.write(new Date().getFullYear())</script> All rights reserved | Pandia Health, Inc</span> </p>\r\n\t\t</div>\r\n\t\t<div class=\"d-flex justify-content-center spad flex-wrap\">\r\n\t\t\t<div class=\"footer-column\">\r\n\t\t\t\t<h5 class=\"footer-title d-flex flex-nowrap text-nowrap\">Our Story</h5>\r\n\t\t\t\t<ul class=\"text-nowrap\">\r\n\t\t\t\t\t<li><a href=\"#\">Our Team</a></li>\r\n\t\t\t\t\t<li><a href=\"#\">Our Doctors</a></li>\r\n\t\t\t\t\t<li><a href=\"#\">Blog</a></li>\r\n\t\t\t\t\t<li><a href=\"#\">Press</a></li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"footer-column\">\r\n\t\t\t\t<h5 class=\"footer-title d-flex text-nowrap\">Quick Links</h5>\r\n\t\t\t\t<ul class=\"text-nowrap\">\r\n\t\t\t\t\t<li><a href=\"#\">Donations</a></li>\r\n\t\t\t\t\t<li><a href=\"#\">Apply for Financial Aid</a></li>\r\n\t\t\t\t\t<li><a href=\"#\">How It Works</a></li>\r\n\t\t\t\t\t<li><a href=\"#\">FAQ</a></li>\r\n\t\t\t\t\t<li><a href=\"#\">Contact Us</a></li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"footer-column\">\r\n\t\t\t\t<h5 class=\"footer-title\">Follow Us</h5>\r\n\t\t\t\t<div class=\"social d-flex flex-nowrap\">\r\n\t\t\t\t\t<a href=\"https://www.facebook.com/pandiahealth/\" class=\"facebook\"><i class=\"fab fa-facebook\"></i></a>\r\n\t\t\t\t\t<a href=\"https://www.youtube.com/channel/UCQ_dgWnuAPvQZo-PSwsk4IA\" class=\"google\"><i class=\"fab fa-youtube\"></i></a>\r\n\t\t\t\t\t<a href=\"https://www.instagram.com/pandiahealth/\" class=\"instagram\"><i class=\"fab fa-instagram\"></i></a>\r\n\t\t\t\t\t<a href=\"https://twitter.com/PandiaHealth\" class=\"twitter\"><i class=\"fab fa-twitter\"></i></a>\r\n\t\t\t\t\t<a href=\"https://www.yelp.com/biz/pandia-health-sunnyvale\" class=\"yelp\"><i class=\"fab fa-yelp\"></i></a>\r\n\t\t\t\t\t<a href=\"https://www.linkedin.com/company/pandia-health/\" class=\"linkedin\"><i class=\"fab fa-linkedin\"></i></a>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"footer-bottom\">\r\n\t\t\t<div class=\"d-flex justify-content-center text-center\">\r\n\t\t\t\t<ul class=\"footer-nav\">\r\n\t\t\t\t\t<li><a href=\"#\">Terms & Conditions</a></li>\r\n\t\t\t\t\t<li><a href=\"#\">Privacy Policy</a></li>\r\n\t\t\t\t\t<li><a href=\"#\">Donations</a></li>\r\n\t\t\t\t\t<li><a href=\"#\">For Providers</a></li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _assets_js_header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/js/header.js */ "./src/assets/js/header.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'app';
    }
    AppComponent.prototype.onAnchorClick = function () {
        console.log("angular");
        Object(_assets_js_header_js__WEBPACK_IMPORTED_MODULE_1__["resizeHeader"])("onAnchorClick");
    };
    AppComponent.prototype.onActivate = function (event) {
        Object(_assets_js_header_js__WEBPACK_IMPORTED_MODULE_1__["resizeHeader"])("onActivate");
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var appRoutes = [
    { path: 'about', component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"] },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes, { enableTracing: false })
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about/about.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/about/about.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/about/about.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Banner Section -->\n\n<section class=\"banner-area relative\" id=\"banner\">\n\t<div class=\"overlay overlay-bg\"></div>\n\t<div class=\"container\">\n\t\t<div class=\"row fullscreen d-flex align-items-center justify-content-center\">\n\t\t\t<div class=\"banner-content col-lg-8\">\n\t\t\t\t<h1 class=\"text-white text-align-center text-bold\" id=\"main-banner\"><strong>About our company</strong></h1>\n\t\t\t\t<p class=\"pt-20 text-white text-align-center\">\n\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n\n<!-- End Banner Section -->\n\n<!-- Details Section -->\n\n<section class=\"relative spad about-area\">\n\t<div class=\"container\">\n\t\t<h3 class=\"mb-30\">Our Mission</h3>\n\t\t<div class=\"d-flex flex-column justify-content-start\">\n\t\t\t<div class=\"\">\n\t\t\t\t<img src=\"/assets/img/currency.jpg\" class=\"img-fluid float-left img-text mr-20 mb-20\">\n\t\t\t\t<p>Quisque vitae nisl imperdiet, tristique ante vitae, viverra magna. Ut nulla leo, placerat a suscipit sed, luctus a lacus. Proin ullamcorper varius blandit. Duis id justo ac felis porta varius vitae quis tortor. Aenean hendrerit, mi quis sagittis pulvinar, ante leo aliquam lectus, in bibendum tellus mauris quis velit. Phasellus elit lacus, varius a tristique sed, facilisis vel purus. Sed consequat auctor nunc, eget ullamcorper augue ultricies vel. Integer rhoncus scelerisque augue. Cras suscipit, libero a vestibulum porttitor, leo lacus laoreet elit, lobortis varius lectus sapien sit amet ex. Nullam pretium sem tellus, quis posuere purus sodales eu.</p>\n\t\t\t</div>\n\t\t\t<p>Quisque vitae nisl imperdiet, tristique ante vitae, viverra magna. Ut nulla leo, placerat a suscipit sed, luctus a lacus. Proin ullamcorper varius blandit. Duis id justo ac felis porta varius vitae quis tortor. Aenean hendrerit, mi quis sagittis pulvinar, ante leo aliquam lectus, in bibendum tellus mauris quis velit. Phasellus elit lacus, varius a tristique sed, facilisis vel purus. Sed consequat auctor nunc, eget ullamcorper augue ultricies vel. Integer rhoncus scelerisque augue. Cras suscipit, libero a vestibulum porttitor, leo lacus laoreet elit, lobortis varius lectus sapien sit amet ex. Nullam pretium sem tellus, quis posuere purus sodales eu.</p>\n\t\t\t<p>Quisque vitae nisl imperdiet, tristique ante vitae, viverra magna. Ut nulla leo, placerat a suscipit sed, luctus a lacus. Proin ullamcorper varius blandit. Duis id justo ac felis porta varius vitae quis tortor. Aenean hendrerit, mi quis sagittis pulvinar, ante leo aliquam lectus, in bibendum tellus mauris quis velit. Phasellus elit lacus, varius a tristique sed, facilisis vel purus. Sed consequat auctor nunc, eget ullamcorper augue ultricies vel. Integer rhoncus scelerisque augue. Cras suscipit, libero a vestibulum porttitor, leo lacus laoreet elit, lobortis varius lectus sapien sit amet ex. Nullam pretium sem tellus, quis posuere purus sodales eu.</p>\n\t\t</div>\n\t</div>\n</section>\n\n<!-- End Details Section -->\n"

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/components/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/components/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Banner Section -->\n\n<section class=\"banner-area relative\" id=\"banner\">\n\t<div class=\"overlay overlay-bg\"></div>\n\t<div class=\"container\">\n\t\t<div class=\"row fullscreen d-flex align-items-center justify-content-center\">\n\t\t\t<div class=\"banner-content col-lg-8\">\n\t\t\t\t<h1 class=\"text-white text-align-center text-bold\" id=\"main-banner\"><strong>Lorem ipsum dolor sit</strong></h1>\n\t\t\t\t<p class=\"pt-20 text-white text-align-center\">\n\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n\n<!-- End Banner Section -->\n\n<!-- Option Section -->\n\n<section class=\"relative bottom-shadow bottom-pad\" id=\"options\">\n\t<div class=\"container\">\n\t\t<div class=\"row laptop-container\">\n\t\t\t<img class=\"mx-auto d-block img-fluid\" src=\"/assets/laptop.png\">\n\t\t</div>\n\t\t<div class=\"row d-flex justify-content-center flex-column text-center section-title option-header\">\n\t\t\t<h2 id=\"options-header\">Lorem ipsum</h2>\n\t\t\t<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed non risus.</p>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-lg-4\">\n\t\t\t\t<div class=\"d-flex flex-column option\">\n\t\t\t\t\t<i class=\"fa-2x fas fa-pencil-alt\"></i>\n\t\t\t\t\t<h3>Option</h3>\n\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pulvinar justo sed pharetra blandit.</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-4 option\">\n\t\t\t\t<div class=\"d-flex flex-column\">\n\t\t\t\t\t<i class=\"fa-2x fas fa-sync\"></i>\n\t\t\t\t\t<h3>Option</h3>\n\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pulvinar justo sed pharetra blandit.</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-4 option\">\n\t\t\t\t<div class=\"d-flex flex-column\">\n\t\t\t\t\t<i class=\"fa-2x fas fa-stethoscope\"></i>\n\t\t\t\t\t<h3>Option</h3>\n\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pulvinar justo sed pharetra blandit.</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\" id=\"image-grid\">\n\t\t\t<div class=\"col-md-6 col-lg-4\"></div>\n\t\t</div>\n\t</div>\n</section>\n\n<!-- End Option Section -->\n\n\n<!-- Process Section -->\n\n<section class=\"relative spad gradient-bg process section-inset-shadow\" id=\"process\">\n\t<div class=\"container\">\n\t\t<div class=\"d-flex justify-content-center flex-column text-center section-title\">\n\t\t\t<h2 class=\"text-white\">Lorem ipsum</h2>\n\t\t\t<p class=\"text-white\">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed non risus.</p>\n\t\t</div>\n\t\t<div class=\"row text-white d-flex\">\n\t\t\t<div class=\"col-lg-4 feature\">\n\t\t\t\t<i class=\"fas fa-user-shield\"></i>\n\t\t\t\t<div class=\"feature-text\">\n\t\t\t\t\t<h5>Lorem ipsum</h5>\n\t\t\t\t\t<p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-4 feature\">\n\t\t\t\t<i class=\"fas fa-clipboard-list\"></i>\n\t\t\t\t<div class=\"feature-text\">\n\t\t\t\t\t<h5>Lorem ipsum</h5>\n\t\t\t\t\t<p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-4 feature\">\n\t\t\t\t<i class=\"fas fa-venus\"></i>\n\t\t\t\t<div class=\"feature-text\">\n\t\t\t\t\t<h5>Lorem ipsum</h5>\n\t\t\t\t\t<p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n\n<!-- End Process Section -->\n\n\n<!-- Team Section -->\n\n<section class=\"relative spad\" id=\"team\">\n\t<div class=\"container\">\n\t\t<div class=\"d-flex justify-content-center flex-column text-center section-title\">\n\t\t\t<h2>Meet Our Team</h2>\n\t\t\t<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed non risus.</p>\n\t\t</div>\n\t</div>\n\t<div id=\"member-container\" class=\"team-members d-flex justify-content-center\">\n\t\t<!-- Member -->\n\t\t<div class=\"member\">\n\t\t\t<div class=\"member-text\">\n\t\t\t\t<div class=\"member-img set-bg\" style=\"background-image: url('/assets/img/avatar1.png');\"></div>\n\t\t\t\t<h4>Lorem Ipsum</h4>\n\t\t\t\t<p>Lorem Ipsum</p>\n\t\t\t</div>\n\t\t\t<div class=\"member-info\">\n\t\t\t\t<div class=\"member-img mf set-bg\" style=\"background-image: url('/assets/img/avatar1.png')\"></div>\n\t\t\t\t<div class=\"member-meta\">\n\t\t\t\t\t<h4>Lorem Ipsum</h4>\n\t\t\t\t\t<span>Lorem Ipsum</span>\n\t\t\t\t</div>\n\t\t\t\t<p>Dr. Sophia Yen has over 20 years of experience in medicine. She serves as a clinical Associate Professor of Pediatrics in the Division of Adolescent Medicine at Stanford Medical School. She graduated from MIT, UCSF Medical School, and UC Berkeley with a MPH in Maternal Child Health. Dr. Yen co-founded Pandia Health and enjoys educating the public and other physicians about birth control, acne, weight management, and other adolescent health issues. She has been featured in many publications for her work in reproductive health and as CEO of Pandia Health.</p>\n\t\t\t</div>\n\t\t</div>\n\t\t<!-- Member -->\n\t\t<div class=\"member\">\n\t\t\t<div class=\"member-text\">\n\t\t\t\t<div class=\"member-img set-bg\" style=\"background-image: url('/assets/img/avatar2.png');\"></div>\n\t\t\t\t<h4>Lorem Ipsum</h4>\n\t\t\t\t<p>Lorem Ipsum</p>\n\t\t\t</div>\n\t\t\t<div class=\"member-info\">\n\t\t\t\t<div class=\"member-img mf set-bg\" style=\"background-image: url('/assets/img/avatar2.png')\"></div>\n\t\t\t\t<div class=\"member-meta\">\n\t\t\t\t\t<h4>Lorem Ipsum</h4>\n\t\t\t\t\t<span>Lorem Ipsum</span>\n\t\t\t\t</div>\n\t\t\t\t<p>Dr. Sophia Yen has over 20 years of experience in medicine. She serves as a clinical Associate Professor of Pediatrics in the Division of Adolescent Medicine at Stanford Medical School. She graduated from MIT, UCSF Medical School, and UC Berkeley with a MPH in Maternal Child Health. Dr. Yen co-founded Pandia Health and enjoys educating the public and other physicians about birth control, acne, weight management, and other adolescent health issues. She has been featured in many publications for her work in reproductive health and as CEO of Pandia Health.</p>\n\t\t\t</div>\n\t\t</div>\n\t\t<!-- Member -->\n\t\t<div class=\"member\">\n\t\t\t<div class=\"member-text\">\n\t\t\t\t<div class=\"member-img set-bg\" style=\"background-image: url('/assets/img/avatar3.png');\"></div>\n\t\t\t\t<h4>Lorem Ipsum</h4>\n\t\t\t\t<p>Lorem Ipsum</p>\n\t\t\t</div>\n\t\t\t<div class=\"member-info\">\n\t\t\t\t<div class=\"member-img mf set-bg\" style=\"background-image: url('/assets/img/avatar3.png')\"></div>\n\t\t\t\t<div class=\"member-meta\">\n\t\t\t\t\t<h4>Lorem Ipsum</h4>\n\t\t\t\t\t<span>Lorem Ipsum</span>\n\t\t\t\t</div>\n\t\t\t\t<p>Dr. Sophia Yen has over 20 years of experience in medicine. She serves as a clinical Associate Professor of Pediatrics in the Division of Adolescent Medicine at Stanford Medical School. She graduated from MIT, UCSF Medical School, and UC Berkeley with a MPH in Maternal Child Health. Dr. Yen co-founded Pandia Health and enjoys educating the public and other physicians about birth control, acne, weight management, and other adolescent health issues. She has been featured in many publications for her work in reproductive health and as CEO of Pandia Health.</p>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n\n<!-- End Team Section -->\n\n<!-- Blog Section -->\n\n<section class=\"relative spad blog-section section-inset-shadow\" id=\"blog\">\n\t<div class=\"container\">\n\t\t<div class=\"d-flex justify-content-center flex-column text-center section-title\">\n\t\t\t<h2>Learn More</h2>\n\t\t\t<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed non risus.</p>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<!-- Item -->\n\t\t\t<div class=\"col-md-4\">\n\t\t\t\t<div class=\"crop blog-item\">\n\t\t\t\t\t<figure>\n\t\t\t\t\t\t<a href><img class=\"image-fluid\" src=\"/assets/img/youtube.png\"></a>\n\t\t\t\t\t</figure>\n\t\t\t\t\t<div class=\"blog-text\">\n\t\t\t\t\t\t<h4>Lorem ipsum dolor sit amet</h4>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- Item -->\n\t\t\t<div class=\"col-md-4\">\n\t\t\t\t<div class=\"crop blog-item\">\n\t\t\t\t\t<figure>\n\t\t\t\t\t\t<a href><img class=\"image-fluid\" src=\"/assets/img/youtube.png\"></a>\n\t\t\t\t\t</figure>\n\t\t\t\t\t<div class=\"blog-text\">\n\t\t\t\t\t\t<h4>Lorem ipsum dolor sit amet</h4>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- Item -->\n\t\t\t<div class=\"col-md-4\">\n\t\t\t\t<div class=\"crop blog-item\">\n\t\t\t\t\t<figure>\n\t\t\t\t\t\t<a href><img class=\"image-fluid\" src=\"/assets/img/youtube.png\"></a>\n\t\t\t\t\t</figure>\n\t\t\t\t\t<div class=\"blog-text\">\n\t\t\t\t\t\t<h4>Lorem ipsum dolor sit amet</h4>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n\n<!-- End Blog Section -->\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/assets/js/header.js":
/*!*********************************!*\
  !*** ./src/assets/js/header.js ***!
  \*********************************/
/*! exports provided: resizeHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resizeHeader", function() { return resizeHeader; });
function resizeHeader(path) {
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


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\Github\Pandia-Prototypes\prototype1\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map