/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var searchIcon = document.getElementById('search');

	$( "#search" ).click(function() {
	  $( "#searchBox" ).toggle( "fast", function() {
	    // Animation complete.
	  });
	});

	__webpack_require__(1);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./main.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./main.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".container {\n  margin: 0 auto;\n  width: 1170px; }\n\n.clearfix:after {\n  visibility: hidden;\n  display: block;\n  font-size: 0;\n  content: \" \";\n  clear: both;\n  height: 0; }\n\n.wrapper {\n  font-family: 'Roboto', sans-serif;\n  width: 100%;\n  height: 160px;\n  overflow: hidden;\n  border-bottom: 1px solid #eee; }\n  .wrapper .logo {\n    margin: 28px 0px 0px 49px; }\n    .wrapper .logo ul.menu {\n      list-style-type: none;\n      float: right;\n      margin: 50px 65px 0px 0px; }\n      .wrapper .logo ul.menu li {\n        float: left;\n        margin-right: 75px; }\n        .wrapper .logo ul.menu li a {\n          text-decoration: none;\n          color: #000;\n          transition: 0.3s;\n          border-bottom: 2px solid transparent; }\n          .wrapper .logo ul.menu li a:hover {\n            padding-bottom: 10px;\n            border-bottom: 2px solid #ccc; }\n        .wrapper .logo ul.menu li button {\n          outline: none;\n          border: none;\n          background: none;\n          cursor: pointer;\n          position: relative;\n          top: -10px;\n          left: 0;\n          right: 0;\n          bottom: 0; }\n    .wrapper .logo #searchBox {\n      display: none;\n      text-align: center;\n      width: 300px;\n      height: 58px;\n      background: #ccc;\n      position: absolute;\n      right: 235px;\n      top: 120px; }\n      .wrapper .logo #searchBox input[type=\"text\"] {\n        width: 258px;\n        background: none;\n        outline: none;\n        padding: 20px;\n        border: none; }\n\n.broadcast-wrapper {\n  font-family: 'Kanit', sans-serif;\n  width: 100%;\n  height: 45px;\n  background: #ccc;\n  margin: 27px 0 0 0; }\n  .broadcast-wrapper .broadcast-black-bold {\n    width: 10px;\n    background: #000;\n    height: 45px;\n    float: left; }\n  .broadcast-wrapper span.broadcast-text h1 {\n    padding: 14px 0 0 56px; }\n\n.content-area {\n  font-family: 'Kanit', sans-serif; }\n  .content-area .hot-article {\n    margin-top: 26px;\n    float: left; }\n    .content-area .hot-article h1 img {\n      margin-left: 20px; }\n    .content-area .hot-article .hot-post-article {\n      margin-top: 24px;\n      width: 680px;\n      height: 360px;\n      background: #1a1a1a; }\n  .content-area .advertise {\n    margin-top: 26px;\n    float: left;\n    margin-left: 43px; }\n    .content-area .advertise .post-advertise {\n      margin-top: 24px;\n      width: 345px;\n      height: 360px;\n      background: #1a1a1a;\n      text-align: center; }\n      .content-area .advertise .post-advertise h1 {\n        padding-top: 100px;\n        font-size: 72px;\n        color: #fff; }\n\n.latest-post {\n  float: left;\n  width: 760px;\n  margin-top: 26px;\n  font-family: 'Kanit', sans-serif; }\n  .latest-post .latest-post-post {\n    width: 300px;\n    padding-bottom: 45px;\n    border-bottom: 1px solid #ccc;\n    float: left;\n    margin-right: 80px; }\n    .latest-post .latest-post-post img {\n      margin-top: 24px; }\n    .latest-post .latest-post-post h2 {\n      font-size: 18px;\n      margin: 10px 0px; }\n      .latest-post .latest-post-post h2 a {\n        text-decoration: none;\n        color: #000; }\n    .latest-post .latest-post-post p {\n      font-size: 14px;\n      color: #ccc; }\n\n.latest-post-text {\n  width: 345px;\n  float: left;\n  font-family: 'Kanit', sans-serif;\n  position: relative;\n  left: -38px;\n  margin-top: 26px; }\n  .latest-post-text .latest-post-post-text ul {\n    margin-top: 10px;\n    list-style-type: none; }\n    .latest-post-text .latest-post-post-text ul li {\n      padding: 15px 0px;\n      border-bottom: 1px solid #ccc; }\n      .latest-post-text .latest-post-post-text ul li a {\n        font-size: 18px;\n        text-decoration: none;\n        color: #000;\n        transition: 0.3s; }\n        .latest-post-text .latest-post-post-text ul li a:hover {\n          color: #ccc; }\n  .latest-post-text .categories-post {\n    margin-top: 26px; }\n    .latest-post-text .categories-post ul {\n      margin-top: 10px;\n      list-style-type: none; }\n      .latest-post-text .categories-post ul li {\n        padding: 15px 0px;\n        border-bottom: 1px solid #ccc; }\n        .latest-post-text .categories-post ul li a {\n          font-size: 18px;\n          text-decoration: none;\n          color: #000;\n          transition: 0.3s; }\n          .latest-post-text .categories-post ul li a:hover {\n            color: #ccc; }\n  .latest-post-text .tags {\n    margin-top: 26px;\n    width: 345px;\n    height: auto; }\n    .latest-post-text .tags h1 {\n      margin-bottom: 25px; }\n    .latest-post-text .tags ul {\n      list-style-type: none; }\n      .latest-post-text .tags ul li {\n        float: left;\n        margin: 5px;\n        padding: 8px;\n        background: #eee;\n        transition: 0.3s; }\n        .latest-post-text .tags ul li:hover {\n          background: #ccc; }\n        .latest-post-text .tags ul li a {\n          text-decoration: none;\n          color: #000; }\n\n.footer {\n  overflow: hidden;\n  margin-top: 100px;\n  font-family: 'Kanit', sans-serif;\n  width: 100%;\n  height: 40px;\n  background: #1a1a1a; }\n  .footer p.left, .footer p.right {\n    color: #eee; }\n  .footer p.left {\n    padding: 13px;\n    float: left; }\n  .footer p.right {\n    padding: 13px;\n    float: right; }\n\n@media screen and (max-width: 768px) {\n  .wrapper {\n    width: 100%;\n    height: auto; }\n    .wrapper .container {\n      width: 100%;\n      height: auto; }\n      .wrapper .container .logo {\n        margin: 20px auto;\n        text-align: center;\n        width: 100%; }\n        .wrapper .container .logo ul.menu {\n          float: none;\n          margin: 0 auto; }\n          .wrapper .container .logo ul.menu li {\n            margin: 30px auto;\n            float: none; }\n        .wrapper .container .logo #searchBox {\n          top: 375px; }\n  .container {\n    width: 100%; }\n    .container .content-area {\n      text-align: center;\n      width: 100%; }\n      .container .content-area .hot-article {\n        width: 100%;\n        float: none; }\n        .container .content-area .hot-article h1 img {\n          text-align: center;\n          margin: 0; }\n        .container .content-area .hot-article .hot-post-article {\n          margin: auto;\n          margin-top: 20px;\n          margin-bottom: 20px;\n          display: block; }\n      .container .content-area .advertise {\n        display: none;\n        margin: 0;\n        float: none; }\n        .container .content-area .advertise .post-advertise {\n          margin: auto;\n          margin-top: 20px;\n          margin-bottom: 20px;\n          display: block; }\n    .container .latest-post {\n      text-align: center;\n      float: none; }\n      .container .latest-post .latest-post-post {\n        position: relative;\n        left: 5.8%; }\n    .container .latest-post-text {\n      text-align: center;\n      left: 27%;\n      display: block; } }\n\n@media screen and (max-width: 480px) {\n  .container {\n    width: 100%; }\n    .container .content-area {\n      text-align: center;\n      width: 100%; }\n      .container .content-area .hot-article {\n        width: 100%;\n        float: none; }\n        .container .content-area .hot-article h1 img {\n          text-align: center;\n          margin: 0; }\n        .container .content-area .hot-article .hot-post-article {\n          width: 95%;\n          margin-top: 20px;\n          margin-bottom: 20px;\n          display: block; }\n    .container .latest-post {\n      width: 100%;\n      float: none;\n      text-align: center; }\n      .container .latest-post .latest-post-post {\n        width: 88%;\n        float: none;\n        position: relative;\n        left: 5.8%; }\n    .container .latest-post-text {\n      text-align: center;\n      left: 15%;\n      display: block; }\n  .footer {\n    text-align: center;\n    width: 100%;\n    height: auto; }\n    .footer p.left {\n      float: none; }\n    .footer p.right {\n      float: none; } }\n\n@media screen and (max-width: 375px) {\n  .container {\n    width: 100%; }\n    .container .content-area {\n      text-align: center;\n      width: 100%; }\n      .container .content-area .hot-article {\n        width: 100%;\n        float: none; }\n        .container .content-area .hot-article h1 img {\n          text-align: center;\n          margin: 0; }\n        .container .content-area .hot-article .hot-post-article {\n          width: 95%;\n          margin-top: 20px;\n          margin-bottom: 20px;\n          display: block; }\n    .container .latest-post {\n      width: 100%;\n      float: none;\n      text-align: center; }\n      .container .latest-post .latest-post-post {\n        width: 88%;\n        float: none;\n        position: relative;\n        left: 5.8%; }\n    .container .latest-post-text {\n      text-align: center;\n      left: 4%;\n      display: block; }\n      .container .latest-post-text .tags ul {\n        position: relative;\n        left: 15px; }\n  .footer {\n    text-align: center;\n    width: 100%;\n    height: auto; }\n    .footer p.left {\n      float: none; }\n    .footer p.right {\n      float: none; } }\n\n/*! normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css */\n/**\r\n * 1. Change the default font family in all browsers (opinionated).\r\n * 2. Correct the line height in all browsers.\r\n * 3. Prevent adjustments of font size after orientation changes in\r\n *    IE on Windows Phone and in iOS.\r\n */\n/* Document\r\n   ========================================================================== */\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  line-height: 1.15;\n  /* 2 */\n  -ms-text-size-adjust: 100%;\n  /* 3 */\n  -webkit-text-size-adjust: 100%;\n  /* 3 */ }\n\n/* Sections\r\n   ========================================================================== */\n/**\r\n * Remove the margin in all browsers (opinionated).\r\n */\nbody {\n  margin: 0; }\n\n/**\r\n * Add the correct display in IE 9-.\r\n */\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block; }\n\n/**\r\n * Correct the font size and margin on `h1` elements within `section` and\r\n * `article` contexts in Chrome, Firefox, and Safari.\r\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\n/* Grouping content\r\n   ========================================================================== */\n/**\r\n * Add the correct display in IE 9-.\r\n * 1. Add the correct display in IE.\r\n */\nfigcaption,\nfigure,\nmain {\n  /* 1 */\n  display: block; }\n\n/**\r\n * Add the correct margin in IE 8.\r\n */\nfigure {\n  margin: 1em 40px; }\n\n/**\r\n * 1. Add the correct box sizing in Firefox.\r\n * 2. Show the overflow in Edge and IE.\r\n */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */ }\n\n/**\r\n * 1. Correct the inheritance and scaling of font size in all browsers.\r\n * 2. Correct the odd `em` font sizing in all browsers.\r\n */\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/* Text-level semantics\r\n   ========================================================================== */\n/**\r\n * 1. Remove the gray background on active links in IE 10.\r\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\r\n */\na {\n  background-color: transparent;\n  /* 1 */\n  -webkit-text-decoration-skip: objects;\n  /* 2 */ }\n\n/**\r\n * Remove the outline on focused links when they are also active or hovered\r\n * in all browsers (opinionated).\r\n */\na:active,\na:hover {\n  outline-width: 0; }\n\n/**\r\n * 1. Remove the bottom border in Firefox 39-.\r\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\r\n */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  text-decoration: underline dotted;\n  /* 2 */ }\n\n/**\r\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\r\n */\nb,\nstrong {\n  font-weight: inherit; }\n\n/**\r\n * Add the correct font weight in Chrome, Edge, and Safari.\r\n */\nb,\nstrong {\n  font-weight: bolder; }\n\n/**\r\n * 1. Correct the inheritance and scaling of font size in all browsers.\r\n * 2. Correct the odd `em` font sizing in all browsers.\r\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/**\r\n * Add the correct font style in Android 4.3-.\r\n */\ndfn {\n  font-style: italic; }\n\n/**\r\n * Add the correct background and color in IE 9-.\r\n */\nmark {\n  background-color: #ff0;\n  color: #000; }\n\n/**\r\n * Add the correct font size in all browsers.\r\n */\nsmall {\n  font-size: 80%; }\n\n/**\r\n * Prevent `sub` and `sup` elements from affecting the line height in\r\n * all browsers.\r\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -0.25em; }\n\nsup {\n  top: -0.5em; }\n\n/* Embedded content\r\n   ========================================================================== */\n/**\r\n * Add the correct display in IE 9-.\r\n */\naudio,\nvideo {\n  display: inline-block; }\n\n/**\r\n * Add the correct display in iOS 4-7.\r\n */\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n/**\r\n * Remove the border on images inside links in IE 10-.\r\n */\nimg {\n  border-style: none; }\n\n/**\r\n * Hide the overflow in IE.\r\n */\nsvg:not(:root) {\n  overflow: hidden; }\n\n/* Forms\r\n   ========================================================================== */\n/**\r\n * 1. Change the font styles in all browsers (opinionated).\r\n * 2. Remove the margin in Firefox and Safari.\r\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */ }\n\n/**\r\n * Show the overflow in IE.\r\n * 1. Show the overflow in Edge.\r\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible; }\n\n/**\r\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\r\n * 1. Remove the inheritance of text transform in Firefox.\r\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none; }\n\n/**\r\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\r\n *    controls in Android 4.\r\n * 2. Correct the inability to style clickable types in iOS and Safari.\r\n */\nbutton,\nhtml [type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */ }\n\n/**\r\n * Remove the inner border and padding in Firefox.\r\n */\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0; }\n\n/**\r\n * Restore the focus styles unset by the previous rule.\r\n */\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText; }\n\n/**\r\n * Change the border, margin, and padding in all browsers (opinionated).\r\n */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n\n/**\r\n * 1. Correct the text wrapping in Edge and IE.\r\n * 2. Correct the color inheritance from `fieldset` elements in IE.\r\n * 3. Remove the padding so developers are not caught out when they zero out\r\n *    `fieldset` elements in all browsers.\r\n */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */ }\n\n/**\r\n * 1. Add the correct display in IE 9-.\r\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\r\n */\nprogress {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */ }\n\n/**\r\n * Remove the default vertical scrollbar in IE.\r\n */\ntextarea {\n  overflow: auto; }\n\n/**\r\n * 1. Add the correct box sizing in IE 10-.\r\n * 2. Remove the padding in IE 10-.\r\n */\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\r\n * Correct the cursor style of increment and decrement buttons in Chrome.\r\n */\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\r\n * 1. Correct the odd appearance in Chrome and Safari.\r\n * 2. Correct the outline style in Safari.\r\n */\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */ }\n\n/**\r\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\r\n */\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\r\n * 1. Correct the inability to style clickable types in iOS and Safari.\r\n * 2. Change font properties to `inherit` in Safari.\r\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */ }\n\n/* Interactive\r\n   ========================================================================== */\n/*\r\n * Add the correct display in IE 9-.\r\n * 1. Add the correct display in Edge, IE, and Firefox.\r\n */\ndetails,\nmenu {\n  display: block; }\n\n/*\r\n * Add the correct display in all browsers.\r\n */\nsummary {\n  display: list-item; }\n\n/* Scripting\r\n   ========================================================================== */\n/**\r\n * Add the correct display in IE 9-.\r\n */\ncanvas {\n  display: inline-block; }\n\n/**\r\n * Add the correct display in IE.\r\n */\ntemplate {\n  display: none; }\n\n/* Hidden\r\n   ========================================================================== */\n/**\r\n * Add the correct display in IE 10-.\r\n */\n[hidden] {\n  display: none; }\n\n/* http://meyerweb.com/eric/tools/css/reset/ \r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
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

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
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

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ]);