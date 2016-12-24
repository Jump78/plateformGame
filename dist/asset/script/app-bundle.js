/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/asset/script/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _config = __webpack_require__(1);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _canvas = __webpack_require__(2);
	
	var _canvas2 = _interopRequireDefault(_canvas);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var message = 'Application "' + _config2.default.name + ' (' + _config2.default.status + ')" version ' + _config2.default.version + ' ready and running';
	console.log(message);
	console.log(_canvas2.default);

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    name: "plateformGame",
	    version: "0.0",
	    status: 'development'
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	console.log('canvas open');
	
	var canvas = document.getElementById('game');
	var ctx = canvas.getContext('2d');
	
	var width = Math.floor(0.8 * window.innerWidth);
	var height = Math.floor(0.9 * window.innerHeight);
	
	canvas.style.width = width + "px";
	canvas.style.height = height + "px";
	
	canvas.style.margin = window.innerHeight / 2 - height / 2 + "px 0px 0px " + (window.innerWidth / 2 - width / 2) + "px";
	
	document.body.appendChild(canvas);
	
	console.log('canvas ready');
	
	exports.default = {
		getWidth: function getWidth() {
			return width;
		},
		getHeight: function getHeight() {
			return height;
		},
		getCtx: function getCtx() {
			return ctx;
		}
	};

/***/ }
/******/ ]);
//# sourceMappingURL=app-bundle.js.map