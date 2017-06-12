'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var options = require('../config');

var gulpWebpack = require('gulp-webpack');
var named = require('vinyl-named');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var webpack = require('webpack');


gulp.task('js', function () {
    gutil.log('Rebundle...');
    if (process.env.NODE_ENV === 'development') {
        return gulp.src(options.scripts.src)
            .pipe(named())
            .pipe(gulpWebpack({
                module: {
                    loaders: [{
                        test: /\.js$/,
                        loader: 'babel-loader',
                        exclude: /node_modules/,
                        query: {
                            presets: ['es2015', 'stage-0', 'react']
                        }
                    }]
                }
            }))
            .pipe(gulp.dest(options.scripts.dest));
    } else {
        return gulp.src(options.scripts.src)
            .pipe(named())
            .pipe(gulpWebpack({
                module: {
                    loaders: [{
                        test: /\.js$/,
                        loader: 'babel-loader',
                        exclude: /node_modules/,
                        query: {
                            presets: ['es2015', 'stage-0', 'react']
                        }
                    }]
                },
                plugins: [
                    new webpack.optimize.UglifyJsPlugin()
                ]
            }, webpack))
            .pipe(gulp.dest(options.scripts.dest));
    }
});