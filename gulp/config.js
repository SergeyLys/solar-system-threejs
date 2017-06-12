'use strict';

var options = {

    default_js_file:'global.js', // root folder - assets/js/

    liverReload: true,
    jadeEnable: false,

    scripts:{
        src: [
            './assets/js/app.js'
        ],
        dest:'./dist/js',
        watch: './assets/js/**/*.js'
    },

    styles:{
        src: ['./assets/css/style.scss', './assets/css/pages/**/*.scss'],
        dest:'./dist/css',
        watch: './assets/css/**/*.scss'
    },

    images:{
        src: ['./assets/images/**/*.+(jpeg|jpg|png|gif)', '!./assets/images/to_webp/**'],
        dest:'./dist/images',
        webp_src:'./assets/images/to_webp/**/*.+(jpeg|jpg|png|gif)',
        svg_src:'./assets/images/**/*.svg'
    },

    markup:{
        src:'./assets/html/*.html',
        dest:'./',
        compiled: './',
        watch:'./assets/html/**/*.html'
    },

    jade: {
        src: './assets/jade/*.jade',
        dest: './dist/html/',
        compiled: './dist/html/*.html',
        watch:'./assets/jade/**/*.jade'
    },

    fonts:{
        src:'./assets/fonts/**',
        dest:'./dist/fonts'
    },

    dist: './dist/*',

    pages_list: './pages.json'
};


module.exports = options;