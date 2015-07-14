var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	minifyCSS = require('gulp-minify-css'),
	rename = require('gulp-rename'),
	imagemin = require('gulp-imagemin');
gulp.task('scripts', function() {
	gulp.src(['js/**/*.js', '!js/**/*.min.js'])
	.pipe(rename({suffix:'.min'}))
	.pipe(uglify())
	.pipe(gulp.dest('js'))
	gulp.src(['views/**/*.js', '!views/**/*.min.js'])
	.pipe(rename({suffix:'.min'}))
	.pipe(uglify())
	.pipe(gulp.dest('views'));
});
gulp.task('styles', function() {
	gulp.src(['css/*.css', '!css/*.min.css'])
	.pipe(rename({suffix:'.min'}))
	.pipe(minifyCSS())
	.pipe(gulp.dest('css'))
	gulp.src(['views/**/*.css', '!views/**/*.min.css'])
	.pipe(rename({suffix:'.min'}))
	.pipe(minifyCSS())
	.pipe(gulp.dest('views'));
});
gulp.task('jpgs', function() {
	gulp.src('img/pizzeria.jpg')
	.pipe(imagemin({progressive: true}))
	.pipe(gulp.dest('img'));
});
gulp.task('default', ['scripts', 'styles', 'jpgs']);
