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

	__webpack_require__(6);


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

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	'use strict';

	/*
	 * GPU Particle System
	 * @author flimshaw - Charlie Hoey - http://charliehoey.com
	 *
	 * A simple to use, general purpose GPU system. Particles are spawn-and-forget with
	 * several options available, and do not require monitoring or cleanup after spawning.
	 * Because the paths of all particles are completely deterministic once spawned, the scale
	 * and direction of time is also variable.
	 *
	 * Currently uses a static wrapping perlin noise texture for turbulence, and a small png texture for
	 * particles, but adding support for a particle texture atlas or changing to a different type of turbulence
	 * would be a fairly light day's work.
	 *
	 * Shader and javascript packing code derrived from several Stack Overflow examples.
	 *
	 */

	THREE.GPUParticleSystem = function (options) {

	    var self = this;
	    var options = options || {};

	    // parse options and use defaults
	    self.PARTICLE_COUNT = options.maxParticles || 1000000;
	    self.PARTICLE_CONTAINERS = options.containerCount || 1;

	    self.PARTICLE_NOISE_TEXTURE = options.particleNoiseTex || null;
	    self.PARTICLE_SPRITE_TEXTURE = options.particleSpriteTex || null;

	    self.PARTICLES_PER_CONTAINER = Math.ceil(self.PARTICLE_COUNT / self.PARTICLE_CONTAINERS);
	    self.PARTICLE_CURSOR = 0;
	    self.time = 0;

	    // Custom vertex and fragement shader
	    var GPUParticleShader = {

	        vertexShader: ['precision highp float;', 'const vec4 bitSh = vec4(256. * 256. * 256., 256. * 256., 256., 1.);', 'const vec4 bitMsk = vec4(0.,vec3(1./256.0));', 'const vec4 bitShifts = vec4(1.) / bitSh;', '#define FLOAT_MAX	1.70141184e38', '#define FLOAT_MIN	1.17549435e-38', 'lowp vec4 encode_float(highp float v) {', 'highp float av = abs(v);', '//Handle special cases', 'if(av < FLOAT_MIN) {', 'return vec4(0.0, 0.0, 0.0, 0.0);', '} else if(v > FLOAT_MAX) {', 'return vec4(127.0, 128.0, 0.0, 0.0) / 255.0;', '} else if(v < -FLOAT_MAX) {', 'return vec4(255.0, 128.0, 0.0, 0.0) / 255.0;', '}', 'highp vec4 c = vec4(0,0,0,0);', '//Compute exponent and mantissa', 'highp float e = floor(log2(av));', 'highp float m = av * pow(2.0, -e) - 1.0;',

	        //Unpack mantissa
	        'c[1] = floor(128.0 * m);', 'm -= c[1] / 128.0;', 'c[2] = floor(32768.0 * m);', 'm -= c[2] / 32768.0;', 'c[3] = floor(8388608.0 * m);', '//Unpack exponent', 'highp float ebias = e + 127.0;', 'c[0] = floor(ebias / 2.0);', 'ebias -= c[0] * 2.0;', 'c[1] += floor(ebias) * 128.0;', '//Unpack sign bit', 'c[0] += 128.0 * step(0.0, -v);', '//Scale back to range', 'return c / 255.0;', '}', 'vec4 pack(const in float depth)', '{', 'const vec4 bit_shift = vec4(256.0*256.0*256.0, 256.0*256.0, 256.0, 1.0);', 'const vec4 bit_mask	= vec4(0.0, 1.0/256.0, 1.0/256.0, 1.0/256.0);', 'vec4 res = mod(depth*bit_shift*vec4(255), vec4(256))/vec4(255);', 'res -= res.xxyz * bit_mask;', 'return res;', '}', 'float unpack(const in vec4 rgba_depth)', '{', 'const vec4 bit_shift = vec4(1.0/(256.0*256.0*256.0), 1.0/(256.0*256.0), 1.0/256.0, 1.0);', 'float depth = dot(rgba_depth, bit_shift);', 'return depth;', '}', 'uniform float uTime;', 'uniform float uScale;', 'uniform sampler2D tNoise;', 'attribute vec4 particlePositionsStartTime;', 'attribute vec4 particleVelColSizeLife;', 'varying vec4 vColor;', 'varying float lifeLeft;', 'void main() {', '// unpack things from our attributes', 'vColor = encode_float( particleVelColSizeLife.y );', '// convert our velocity back into a value we can use', 'vec4 velTurb = encode_float( particleVelColSizeLife.x );', 'vec3 velocity = vec3( velTurb.xyz );', 'float turbulence = velTurb.w;', 'vec3 newPosition;', 'float timeElapsed = uTime - particlePositionsStartTime.a;', 'lifeLeft = 1. - (timeElapsed / particleVelColSizeLife.w);', 'gl_PointSize = ( uScale * particleVelColSizeLife.z ) * lifeLeft;', 'velocity.x = ( velocity.x - .5 ) * 3.;', 'velocity.y = ( velocity.y - .5 ) * 3.;', 'velocity.z = ( velocity.z - .5 ) * 3.;', 'newPosition = particlePositionsStartTime.xyz + ( velocity * 10. ) * ( uTime - particlePositionsStartTime.a );', 'vec3 noise = texture2D( tNoise, vec2( newPosition.x * .015 + (uTime * .05), newPosition.y * .02 + (uTime * .015) )).rgb;', 'vec3 noiseVel = ( noise.rgb - .5 ) * 30.;', 'newPosition = mix(newPosition, newPosition + vec3(noiseVel * ( turbulence * 5. ) ), (timeElapsed / particleVelColSizeLife.a) );', 'if( velocity.y > 0. && velocity.y < .05 ) {', 'lifeLeft = 0.;', '}', 'if( velocity.x < -1.45 ) {', 'lifeLeft = 0.;', '}', 'if( timeElapsed > 0. ) {', 'gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );', '} else {', 'gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );', 'lifeLeft = 0.;', 'gl_PointSize = 0.;', '}', '}'].join("\n"),

	        fragmentShader: ['float scaleLinear(float value, vec2 valueDomain) {', 'return (value - valueDomain.x) / (valueDomain.y - valueDomain.x);', '}', 'float scaleLinear(float value, vec2 valueDomain, vec2 valueRange) {', 'return mix(valueRange.x, valueRange.y, scaleLinear(value, valueDomain));', '}', 'varying vec4 vColor;', 'varying float lifeLeft;', 'uniform sampler2D tSprite;', 'void main() {', 'float alpha = 0.;', 'if( lifeLeft > .995 ) {', 'alpha = scaleLinear( lifeLeft, vec2(1., .995), vec2(0., 1.));//mix( 0., 1., ( lifeLeft - .95 ) * 100. ) * .75;', '} else {', 'alpha = lifeLeft * .75;', '}', 'vec4 tex = texture2D( tSprite, gl_PointCoord );', 'gl_FragColor = vec4( vColor.rgb * tex.a, alpha * tex.a );', '}'].join("\n")

	    };

	    // preload a million random numbers
	    self.rand = [];

	    for (var i = 1e5; i > 0; i--) {
	        self.rand.push(Math.random() - .5);
	    }

	    self.random = function () {
	        return ++i >= self.rand.length ? self.rand[i = 1] : self.rand[i];
	    };

	    var textureLoader = new THREE.TextureLoader();

	    self.particleNoiseTex = self.PARTICLE_NOISE_TEXTURE || textureLoader.load("dist/images/texture1.png");
	    self.particleNoiseTex.wrapS = self.particleNoiseTex.wrapT = THREE.RepeatWrapping;

	    self.particleSpriteTex = self.PARTICLE_SPRITE_TEXTURE || textureLoader.load("dist/images/texture2.png");
	    self.particleSpriteTex.wrapS = self.particleSpriteTex.wrapT = THREE.RepeatWrapping;

	    self.particleShaderMat = new THREE.ShaderMaterial({
	        transparent: true,
	        depthWrite: false,
	        uniforms: {
	            "uTime": {
	                value: 0.0
	            },
	            "uScale": {
	                value: 1.0
	            },
	            "tNoise": {
	                value: self.particleNoiseTex
	            },
	            "tSprite": {
	                value: self.particleSpriteTex
	            }
	        },
	        blending: THREE.AdditiveBlending,
	        vertexShader: GPUParticleShader.vertexShader,
	        fragmentShader: GPUParticleShader.fragmentShader
	    });

	    // define defaults for all values
	    self.particleShaderMat.defaultAttributeValues.particlePositionsStartTime = [0, 0, 0, 0];
	    self.particleShaderMat.defaultAttributeValues.particleVelColSizeLife = [0, 0, 0, 0];

	    self.particleContainers = [];

	    // extend Object3D
	    THREE.Object3D.apply(this, arguments);

	    this.init = function () {

	        for (var i = 0; i < self.PARTICLE_CONTAINERS; i++) {

	            var c = new THREE.GPUParticleContainer(self.PARTICLES_PER_CONTAINER, self);
	            self.particleContainers.push(c);
	            self.add(c);
	        }
	    };

	    this.spawnParticle = function (options) {

	        self.PARTICLE_CURSOR++;
	        if (self.PARTICLE_CURSOR >= self.PARTICLE_COUNT) {
	            self.PARTICLE_CURSOR = 1;
	        }

	        var currentContainer = self.particleContainers[Math.floor(self.PARTICLE_CURSOR / self.PARTICLES_PER_CONTAINER)];

	        currentContainer.spawnParticle(options);
	    };

	    this.update = function (time) {
	        for (var i = 0; i < self.PARTICLE_CONTAINERS; i++) {

	            self.particleContainers[i].update(time);
	        }
	    };

	    this.init();
	};

	THREE.GPUParticleSystem.prototype = Object.create(THREE.Object3D.prototype);
	THREE.GPUParticleSystem.prototype.constructor = THREE.GPUParticleSystem;

	// Subclass for particle containers, allows for very large arrays to be spread out
	THREE.GPUParticleContainer = function (maxParticles, particleSystem) {

	    var self = this;
	    self.PARTICLE_COUNT = maxParticles || 100000;
	    self.PARTICLE_CURSOR = 0;
	    self.time = 0;
	    self.DPR = window.devicePixelRatio;
	    self.GPUParticleSystem = particleSystem;

	    var particlesPerArray = Math.floor(self.PARTICLE_COUNT / self.MAX_ATTRIBUTES);

	    // extend Object3D
	    THREE.Object3D.apply(this, arguments);

	    // construct a couple small arrays used for packing variables into floats etc
	    var UINT8_VIEW = new Uint8Array(4);
	    var FLOAT_VIEW = new Float32Array(UINT8_VIEW.buffer);

	    function decodeFloat(x, y, z, w) {
	        UINT8_VIEW[0] = Math.floor(w);
	        UINT8_VIEW[1] = Math.floor(z);
	        UINT8_VIEW[2] = Math.floor(y);
	        UINT8_VIEW[3] = Math.floor(x);
	        return FLOAT_VIEW[0];
	    }

	    function componentToHex(c) {
	        var hex = c.toString(16);
	        return hex.length == 1 ? "0" + hex : hex;
	    }

	    function rgbToHex(r, g, b) {
	        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
	    }

	    function hexToRgb(hex) {
	        var r = hex >> 16;
	        var g = (hex & 0x00FF00) >> 8;
	        var b = hex & 0x0000FF;

	        if (r > 0) r--;
	        if (g > 0) g--;
	        if (b > 0) b--;

	        return [r, g, b];
	    }

	    self.particles = [];
	    self.deadParticles = [];
	    self.particlesAvailableSlot = [];

	    // create a container for particles
	    self.particleUpdate = false;

	    // Shader Based Particle System
	    self.particleShaderGeo = new THREE.BufferGeometry();

	    // new hyper compressed attributes
	    self.particleVertices = new Float32Array(self.PARTICLE_COUNT * 3); // position
	    self.particlePositionsStartTime = new Float32Array(self.PARTICLE_COUNT * 4); // position
	    self.particleVelColSizeLife = new Float32Array(self.PARTICLE_COUNT * 4);

	    for (var i = 0; i < self.PARTICLE_COUNT; i++) {
	        self.particlePositionsStartTime[i * 4 + 0] = 100; //x
	        self.particlePositionsStartTime[i * 4 + 1] = 0; //y
	        self.particlePositionsStartTime[i * 4 + 2] = 0.0; //z
	        self.particlePositionsStartTime[i * 4 + 3] = 0.0; //startTime

	        self.particleVertices[i * 3 + 0] = 0; //x
	        self.particleVertices[i * 3 + 1] = 0; //y
	        self.particleVertices[i * 3 + 2] = 0.0; //z

	        self.particleVelColSizeLife[i * 4 + 0] = decodeFloat(128, 128, 0, 0); //vel
	        self.particleVelColSizeLife[i * 4 + 1] = decodeFloat(0, 254, 0, 254); //color
	        self.particleVelColSizeLife[i * 4 + 2] = 1.0; //size
	        self.particleVelColSizeLife[i * 4 + 3] = 0.0; //lifespan
	    }

	    self.particleShaderGeo.addAttribute('position', new THREE.BufferAttribute(self.particleVertices, 3));
	    self.particleShaderGeo.addAttribute('particlePositionsStartTime', new THREE.BufferAttribute(self.particlePositionsStartTime, 4).setDynamic(true));
	    self.particleShaderGeo.addAttribute('particleVelColSizeLife', new THREE.BufferAttribute(self.particleVelColSizeLife, 4).setDynamic(true));

	    self.posStart = self.particleShaderGeo.getAttribute('particlePositionsStartTime');
	    self.velCol = self.particleShaderGeo.getAttribute('particleVelColSizeLife');

	    self.particleShaderMat = self.GPUParticleSystem.particleShaderMat;

	    this.init = function () {
	        self.particleSystem = new THREE.Points(self.particleShaderGeo, self.particleShaderMat);
	        self.particleSystem.frustumCulled = false;
	        this.add(self.particleSystem);
	    };

	    var options = {},
	        position = new THREE.Vector3(),
	        velocity = new THREE.Vector3(),
	        positionRandomness = 0.,
	        velocityRandomness = 0.,
	        color = 0xffffff,
	        colorRandomness = 0.,
	        turbulence = 0.,
	        lifetime = 0.,
	        size = 0.,
	        sizeRandomness = 0.,
	        smoothPosition = false,
	        i;

	    var maxVel = 2;
	    var maxSource = 250;
	    this.offset = 0;
	    this.count = 0;

	    this.spawnParticle = function (options) {

	        options = options || {};

	        // setup reasonable default values for all arguments
	        position = options.position !== undefined ? position.copy(options.position) : position.set(0., 0., 0.);
	        velocity = options.velocity !== undefined ? velocity.copy(options.velocity) : velocity.set(0., 0., 0.);
	        positionRandomness = options.positionRandomness !== undefined ? options.positionRandomness : 0.0;
	        velocityRandomness = options.velocityRandomness !== undefined ? options.velocityRandomness : 0.0;
	        color = options.color !== undefined ? options.color : 0xffffff;
	        colorRandomness = options.colorRandomness !== undefined ? options.colorRandomness : 1.0;
	        turbulence = options.turbulence !== undefined ? options.turbulence : 1.0;
	        lifetime = options.lifetime !== undefined ? options.lifetime : 5.0;
	        size = options.size !== undefined ? options.size : 10;
	        sizeRandomness = options.sizeRandomness !== undefined ? options.sizeRandomness : 0.0;
	        smoothPosition = options.smoothPosition !== undefined ? options.smoothPosition : false;

	        if (self.DPR !== undefined) size *= self.DPR;

	        i = self.PARTICLE_CURSOR;

	        self.posStart.array[i * 4 + 0] = position.x + particleSystem.random() * positionRandomness; // - ( velocity.x * particleSystem.random() ); //x
	        self.posStart.array[i * 4 + 1] = position.y + particleSystem.random() * positionRandomness; // - ( velocity.y * particleSystem.random() ); //y
	        self.posStart.array[i * 4 + 2] = position.z + particleSystem.random() * positionRandomness; // - ( velocity.z * particleSystem.random() ); //z
	        self.posStart.array[i * 4 + 3] = self.time + particleSystem.random() * 2e-2; //startTime

	        if (smoothPosition === true) {
	            self.posStart.array[i * 4 + 0] += -(velocity.x * particleSystem.random()); //x
	            self.posStart.array[i * 4 + 1] += -(velocity.y * particleSystem.random()); //y
	            self.posStart.array[i * 4 + 2] += -(velocity.z * particleSystem.random()); //z
	        }

	        var velX = velocity.x + particleSystem.random() * velocityRandomness;
	        var velY = velocity.y + particleSystem.random() * velocityRandomness;
	        var velZ = velocity.z + particleSystem.random() * velocityRandomness;

	        // convert turbulence rating to something we can pack into a vec4
	        var turbulence = Math.floor(turbulence * 254);

	        // clamp our value to between 0. and 1.
	        velX = Math.floor(maxSource * ((velX - -maxVel) / (maxVel - -maxVel)));
	        velY = Math.floor(maxSource * ((velY - -maxVel) / (maxVel - -maxVel)));
	        velZ = Math.floor(maxSource * ((velZ - -maxVel) / (maxVel - -maxVel)));

	        self.velCol.array[i * 4 + 0] = decodeFloat(velX, velY, velZ, turbulence); //vel

	        var rgb = hexToRgb(color);

	        for (var c = 0; c < rgb.length; c++) {
	            rgb[c] = Math.floor(rgb[c] + particleSystem.random() * colorRandomness * 254);
	            if (rgb[c] > 254) rgb[c] = 254;
	            if (rgb[c] < 0) rgb[c] = 0;
	        }

	        self.velCol.array[i * 4 + 1] = decodeFloat(rgb[0], rgb[1], rgb[2], 254); //color
	        self.velCol.array[i * 4 + 2] = size + particleSystem.random() * sizeRandomness; //size
	        self.velCol.array[i * 4 + 3] = lifetime; //lifespan

	        if (this.offset == 0) {
	            this.offset = self.PARTICLE_CURSOR;
	        }

	        self.count++;

	        self.PARTICLE_CURSOR++;

	        if (self.PARTICLE_CURSOR >= self.PARTICLE_COUNT) {
	            self.PARTICLE_CURSOR = 0;
	        }

	        self.particleUpdate = true;
	    };

	    this.update = function (time) {

	        self.time = time;
	        self.particleShaderMat.uniforms['uTime'].value = time;

	        this.geometryUpdate();
	    };

	    this.geometryUpdate = function () {
	        if (self.particleUpdate == true) {
	            self.particleUpdate = false;

	            // if we can get away with a partial buffer update, do so
	            if (self.offset + self.count < self.PARTICLE_COUNT) {
	                self.posStart.updateRange.offset = self.velCol.updateRange.offset = self.offset * 4;
	                self.posStart.updateRange.count = self.velCol.updateRange.count = self.count * 4;
	            } else {
	                self.posStart.updateRange.offset = 0;
	                self.posStart.updateRange.count = self.velCol.updateRange.count = self.PARTICLE_COUNT * 4;
	            }

	            self.posStart.needsUpdate = true;
	            self.velCol.needsUpdate = true;

	            self.offset = 0;
	            self.count = 0;
	        }
	    };

	    this.init();
	};

	THREE.GPUParticleContainer.prototype = Object.create(THREE.Object3D.prototype);
	THREE.GPUParticleContainer.prototype.constructor = THREE.GPUParticleContainer;

/***/ })
/******/ ]);