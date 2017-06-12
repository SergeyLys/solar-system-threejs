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
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _Stars = __webpack_require__(2);

	var _Stars2 = _interopRequireDefault(_Stars);

	var _ParticlesSystem = __webpack_require__(3);

	var _ParticlesSystem2 = _interopRequireDefault(_ParticlesSystem);

	var _Planet = __webpack_require__(4);

	var _Planet2 = _interopRequireDefault(_Planet);

	var _SolarSystem = __webpack_require__(5);

	var _SolarSystem2 = _interopRequireDefault(_SolarSystem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	document.addEventListener('DOMContentLoaded', function () {
	    var app = new _SolarSystem2.default();
	    app.appendMesh([new _Stars2.default({
	        size: 1,
	        count: 1500,
	        scale: {
	            x: 50,
	            y: 50,
	            z: 50
	        }
	    }), new _Stars2.default({
	        size: 2,
	        count: 3000,
	        scale: {
	            x: 10,
	            y: 10,
	            z: 10
	        }
	    }), new _Planet2.default({
	        texture: '',
	        size: 200
	    }), new _Planet2.default({
	        texture: '',
	        size: 30,
	        speed: .003,
	        distance: -800
	    }), new _ParticlesSystem2.default({
	        maxParticles: 5000,
	        color: '0xff0000',
	        size: 10,
	        horizontalSpeed: .003,
	        verticalSpeed: .003,
	        distance: -800,
	        lifetime: 5,
	        spawnRate: 100
	    }), new _Planet2.default({
	        texture: '',
	        size: 30,
	        speed: .003,
	        distance: 1600
	    }), new _ParticlesSystem2.default({
	        maxParticles: 5000,
	        color: '0xFF00EC',
	        size: 4,
	        horizontalSpeed: .003,
	        verticalSpeed: .003,
	        distance: 1600,
	        lifetime: 5,
	        spawnRate: 1600
	    }), new _Planet2.default({
	        texture: '',
	        size: 40,
	        speed: .001,
	        distance: 2400
	    }), new _ParticlesSystem2.default({
	        maxParticles: 10000,
	        color: '0x00D1FF',
	        size: 4,
	        horizontalSpeed: .001,
	        verticalSpeed: .001,
	        distance: 2400,
	        lifetime: 5,
	        spawnRate: 2400
	    }), new _Planet2.default({
	        texture: '',
	        size: 50,
	        speed: .001,
	        distance: -3200
	    }), new _ParticlesSystem2.default({
	        maxParticles: 10000,
	        color: '0x001FFF',
	        size: 4,
	        horizontalSpeed: .001,
	        verticalSpeed: .001,
	        distance: -3200,
	        lifetime: 5,
	        spawnRate: 3200
	    })]);
	});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Stars = function () {
	    function Stars(props) {
	        _classCallCheck(this, Stars);

	        this.geometry = new THREE.Geometry();
	        this.material = new THREE.PointsMaterial({
	            color: 0xbbbbbb,
	            opacity: 0,
	            size: props.size,
	            sizeAttenuation: false
	        });

	        for (var i = 0; i < props.count; i++) {
	            var vertex = new THREE.Vector3();
	            vertex.x = Math.random() * 2 - 1;
	            vertex.y = Math.random() * 2 - 1;
	            vertex.z = Math.random() * 2 - 1;
	            vertex.multiplyScalar(6000);
	            this.geometry.vertices.push(vertex);
	        }

	        this.mesh = new THREE.Points(this.geometry, this.material);
	        this.mesh.scale.set(props.scale.x, props.scale.y, props.scale.z);
	    }

	    _createClass(Stars, [{
	        key: "update",
	        value: function update() {
	            this.meshObj.position.y += 20;
	        }
	    }, {
	        key: "meshObj",
	        get: function get() {
	            return this.mesh;
	        }
	    }]);

	    return Stars;
	}();

	exports.default = Stars;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ParticlesSystem = function () {
	    function ParticlesSystem(props) {
	        _classCallCheck(this, ParticlesSystem);

	        this.particleSystem = new THREE.GPUParticleSystem({ maxParticles: props.maxParticles });
	        this.clock = new THREE.Clock(true);
	        this.tick = 0;

	        this.settings = {
	            position: new THREE.Vector3(),
	            positionRandomness: .3,
	            velocity: new THREE.Vector3(),
	            velocityRandomness: .3,
	            color: props.color,
	            colorRandomness: 2,
	            turbulence: 0,
	            lifetime: props.lifetime,
	            size: props.size,
	            sizeRandomness: 1,
	            spawnRate: props.spawnRate,
	            horizontalSpeed: props.horizontalSpeed,
	            verticalSpeed: props.verticalSpeed,
	            distance: props.distance,
	            timeScale: 1
	        };
	    }

	    _createClass(ParticlesSystem, [{
	        key: "update",
	        value: function update() {
	            var delta = this.clock.getDelta() * this.settings.timeScale;
	            this.tick += delta;
	            if (delta > 0) {
	                this.settings.position.x = Math.sin(Date.now() * this.settings.horizontalSpeed) * this.settings.distance;
	                this.settings.position.z = Math.cos(Date.now() * this.settings.verticalSpeed) * this.settings.distance;
	                this.settings.position.y += 20;

	                for (var i = 0; i < this.settings.spawnRate * delta; i++) {
	                    this.meshObj.spawnParticle(this.settings);
	                }
	            }
	            this.meshObj.update(this.tick);
	        }
	    }, {
	        key: "meshObj",
	        get: function get() {
	            return this.particleSystem;
	        }
	    }]);

	    return ParticlesSystem;
	}();

	exports.default = ParticlesSystem;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Planet = function () {
	    function Planet(props) {
	        _classCallCheck(this, Planet);

	        this.speed = props.speed;
	        this.distance = props.distance;
	        this.t = 0;

	        this.geometry = new THREE.SphereGeometry(props.size, 40, 40);
	        this.texture = new THREE.Texture();
	        this.loader = new THREE.ImageLoader();

	        if (props.texture) {
	            thisloader.load(props.texture, function (image) {
	                this.texture.image = image;
	                this.texture.needsUpdate = true;
	            }, function (xhr) {
	                console.log(xhr.loaded / xhr.total * 100 + '% loaded');
	            }, function (xhr) {
	                console.log('An error happened');
	            });

	            this.material = new THREE.MeshPhongMaterial({ map: this.texture });

	            // if (props.name === 'sun') {
	            //     this.material = new THREE.MeshBasicMaterial({map: this.texture});
	            // }
	        } else {
	            this.material = new THREE.MeshNormalMaterial();
	        }

	        this.mesh = new THREE.Mesh(this.geometry, this.material);
	        this.mesh.castShadow = true;
	    }

	    _createClass(Planet, [{
	        key: 'update',
	        value: function update() {
	            this.meshObj.rotation.y += 0.003;
	            this.meshObj.position.y += 20;

	            if (this.speed) {
	                this.meshObj.position.x = Math.sin(Date.now() * this.speed) * this.distance;
	                this.meshObj.position.z = Math.cos(Date.now() * this.speed) * this.distance;

	                this.t += Math.PI / 180 * 2;
	            }
	        }
	    }, {
	        key: 'meshObj',
	        get: function get() {
	            return this.mesh;
	        }
	    }]);

	    return Planet;
	}();

	exports.default = Planet;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var SolarSystem = function () {
	    function SolarSystem() {
	        _classCallCheck(this, SolarSystem);

	        this.objects = [];
	        this.createScene();
	    }

	    _createClass(SolarSystem, [{
	        key: 'createScene',
	        value: function createScene() {
	            var width = window.innerWidth;
	            var height = window.innerHeight;
	            this.move = 0;
	            this.radius = 4000;

	            this.canvas = document.getElementById('canvas');
	            this.canvas.setAttribute('width', width);
	            this.canvas.setAttribute('height', height);

	            this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas });
	            this.scene = new THREE.Scene();
	            this.camera = new THREE.PerspectiveCamera(65, width / height, 0.1, 1000000);

	            this.renderer.setClearColor(0x000000);
	            this.camera.position.set(0, 0, 1300);
	            this.camera.rotation.z = -Math.PI / 20;
	            this.scene.add(this.camera);
	            this.render();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this = this;

	            requestAnimationFrame(function () {
	                _this.render();
	            });

	            this.objects.map(function (object) {
	                object.update();
	            });

	            this.move += 20;
	            this.camera.position.x = this.radius * Math.sin(THREE.Math.degToRad(-Date.now() / 60));
	            this.camera.position.y = this.radius * Math.sin(THREE.Math.degToRad(Date.now() / 60)) + this.move;
	            this.camera.position.z = this.radius * Math.cos(THREE.Math.degToRad(Date.now() / 60));
	            this.camera.updateMatrixWorld();
	            this.scene.position.y = this.move;
	            this.camera.lookAt(this.scene.position);

	            this.renderer.render(this.scene, this.camera);
	        }
	    }, {
	        key: 'appendMesh',
	        value: function appendMesh() {
	            var _this2 = this;

	            var mesh = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

	            mesh.map(function (mesh) {
	                _this2.objects.push(mesh);
	                _this2.scene.add(mesh.meshObj);
	            });
	        }
	    }]);

	    return SolarSystem;
	}();

	exports.default = SolarSystem;

/***/ })
/******/ ]);