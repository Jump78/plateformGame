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
	
	var _game = __webpack_require__(2);
	
	var _game2 = _interopRequireDefault(_game);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var message = 'Application "' + _config2.default.name + ' (' + _config2.default.status + ')" version ' + _config2.default.version + ' ready and running';
	console.log(message);
	
	_game2.default.start();

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
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _scene = __webpack_require__(3);
	
	var _scene2 = _interopRequireDefault(_scene);
	
	var _tilesetClass = __webpack_require__(5);
	
	var _tilesetClass2 = _interopRequireDefault(_tilesetClass);
	
	var _PlateformClass = __webpack_require__(9);
	
	var _PlateformClass2 = _interopRequireDefault(_PlateformClass);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var tilesprite = new _tilesetClass2.default('asset/images/tileset/tilesheet_world.png', 72, 72, 2);
	
	var isPaused = false;
	
	for (var i = 0; i < 5; i++) {
	
		var plateform = new _PlateformClass2.default({
			sprite: tilesprite,
			tiles: [15, 3, 146],
			position: { x: 25 * i, y: 25 * i },
			scale: Math.random()
		});
	
		_scene2.default.addScene(plateform);
	}
	
	function gameloop() {
		if (!isPaused) {
			_scene2.default.render();
			_scene2.default.update();
		}
	
		requestAnimationFrame(gameloop);
	}
	
	window.onkeydown = function () {
		isPaused = !isPaused;
	};
	
	exports.default = {
		start: function start() {
			requestAnimationFrame(gameloop);
		},
		getIsPaused: function getIsPaused() {
			return isPaused;
		}
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _canvas = __webpack_require__(4);
	
	var _canvas2 = _interopRequireDefault(_canvas);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ctx = _canvas2.default.getCtx();
	
	var scene = [];
	
	exports.default = {
		addScene: function addScene(arg) {
			arg.id = scene.length + 1;
			scene.push(arg);
		},
		deleteScene: function deleteScene(id) {
			scene.slice(id, 1);
		},
		getScene: function getScene() {
			return scene;
		},
		render: function render() {
			ctx.clearRect(0, 0, _canvas2.default.getWidth(), _canvas2.default.getHeight());
	
			for (var i = 0; i < scene.length; i++) {
				if (scene[i].render && scene[i].isRenderable()) scene[i].render(ctx);
			};
		},
		update: function update() {
			for (var i = 0; i < scene.length; i++) {
				if (scene[i].update) scene[i].update();
				if (!scene[i].isRenderable()) deleteScene(i);
			};
		}
	};

/***/ },
/* 4 */
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

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _class = function () {
		function _class(uri, tileWidth, tileHeight, marge) {
			_classCallCheck(this, _class);
	
			this.marge = marge || 0;
	
			this.image = new Image();
	
			this.image.tile = this;
	
			this.image.src = uri;
	
			this.tileSize = {
				width: tileWidth,
				height: tileHeight
			};
	
			this.nbTile = {
				width: this.image.width / tileWidth,
				height: this.image.height / tileHeight
			};
		}
	
		_createClass(_class, [{
			key: "drawTile",
			value: function drawTile(tileId, ctx, x, y, scale) {
	
				if (scale) scale = scale;else scale = 1;
	
				var tileX = tileId % this.nbTile.width;
				if (tileX == 0) tileX = this.nbTile.width;
	
				var tileY = Math.ceil(tileId / this.nbTile.width);
	
				var xSource = (tileX - 1) * this.tileSize.width;
	
				var ySource = (tileY - 1) * this.tileSize.height;
	
				ctx.drawImage(this.image, xSource, ySource, this.tileSize.width, this.tileSize.height, x, y, Math.round(this.tileSize.width * scale), Math.round(this.tileSize.height * scale));
			}
		}, {
			key: "getTileSize",
			value: function getTileSize() {
				return this.tileSize;
			}
		}]);

		return _class;
	}();

	exports.default = _class;

/***/ },
/* 6 */,
/* 7 */,
/* 8 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _class = function () {
		function _class(obj) {
			_classCallCheck(this, _class);
	
			this.name = 'entity';
	
			this.position = {
				x: 0,
				y: 0
			};
	
			this.velocity = {
				x: 0,
				y: 0
			}, this.renderable = true;
	
			if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object') {
				for (var prop in obj) {
					if (this.hasOwnProperty(prop)) this[prop] = obj[prop];
				}
			}
		}
	
		_createClass(_class, [{
			key: 'hidde',
			value: function hidde() {
				this.renderable = false;
			}
		}, {
			key: 'show',
			value: function show() {
				this.renderable = true;
			}
		}, {
			key: 'isRenderable',
			value: function isRenderable() {
				return this.renderable;
			}
		}]);

		return _class;
	}();

	exports.default = _class;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _entityClass = __webpack_require__(8);
	
	var _entityClass2 = _interopRequireDefault(_entityClass);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _class = function (_Entity) {
		_inherits(_class, _Entity);
	
		function _class(obj) {
			_classCallCheck(this, _class);
	
			var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));
	
			_this.sprite = null;
	
			_this.tiles = [];
	
			_this.scale = 1;
	
			if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object') {
				for (var prop in obj) {
					if (_this.hasOwnProperty(prop)) _this[prop] = obj[prop];
				}
			}
			return _this;
		}
	
		_createClass(_class, [{
			key: 'render',
			value: function render(ctx) {
				if (this.sprite && this.tiles.length > 0) {
	
					var a = this.tiles;
					var sprite = this.sprite;
					var coord = this.position;
	
					for (var i = 0; i < a.length; i++) {
						var tileSize = sprite.getTileSize();
						sprite.drawTile(a[i], ctx, coord.x + (tileSize.width - sprite.marge) * i * this.scale, coord.y, this.scale);
					}
				}
			}
		}]);

		return _class;
	}(_entityClass2.default);

	exports.default = _class;

/***/ }
/******/ ]);
//# sourceMappingURL=app-bundle.js.map