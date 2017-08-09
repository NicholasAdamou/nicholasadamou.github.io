'use-strict';

var gulp = require('gulp'),
    $ = require('gulp-load-plugins')({ lazy: true }),
    del = require('del');

var paths = require('../../paths.js'),
    error = require('../../error_handler.js'),
    config = require('../../config.js')();

gulp.task('jslint', function() {
    console.log('-> Running jslint on ' + config.js.name);

    return gulp.src(paths.to.js.in)
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish', { verbose: true }))
        .pipe($.jshint.reporter('fail'));
});

gulp.task('js', ['jslint'], function() {
    var env = ((config.environment || process.env.NODE_ENV || 'development').trim().toLowerCase() !== 'production');
    
    if (env) {
        console.log('-> Compiling Javascript for Development');

        return gulp.src(paths.to.js.in)
            .pipe($.sourcemaps.init())
            .pipe($.browserify({ debug: true }))
            .pipe($.plumber())
            .pipe($.babel())
            .pipe($.newer(paths.to.js.out))
            .pipe($.concat(config.js.name))
            .pipe($.sourcemaps.write())
            .pipe(gulp.dest(paths.to.js.out));
    } else {
        console.log('-> Compiling Javascript for Production');

        return gulp.src(paths.to.js.in)
            .pipe($.browserify({ debug: true }))
            .pipe($.plumber())
            .pipe($.babel())
            .pipe($.deporder())
            .pipe($.concat(config.js.name))
            .pipe($.stripDebug())
            .pipe($.size({ title: 'Javascript In Size' }))
            .pipe($.uglify())
            .pipe($.size({ title: 'Javascript Out Size' }))
            .pipe($.rename({ suffix: '.min' }))
            .pipe(gulp.dest(paths.to.js.out));
    }
});