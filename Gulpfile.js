'use strict';
const gulp = require('gulp'),
	cssmin = require('gulp-cssnano'),
	prefix = require('gulp-autoprefixer'),
	sass = require('gulp-sass'),
  SASS_SRC_PATH = './sass/**/*.scss',
  SASS_DEST_PATH = './css/';

gulp.task('styles', function (done) {
	gulp.src(SASS_SRC_PATH)
		.pipe(sass({ style: 'compressed' })
			.on('error', sass.logError))
		.pipe(prefix({ browsers: ['cover 99.5%'] }))
    .pipe(cssmin())
		.pipe(gulp.dest(SASS_DEST_PATH))
    .on('end', done);
});

gulp.task('default', function () {
	gulp.watch(SASS_SRC_PATH, gulp.series('styles'));
});