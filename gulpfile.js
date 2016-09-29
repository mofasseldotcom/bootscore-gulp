// gulpfile.js
var gulp 		= require('gulp'),
	plumber		= require('gulp-plumber'),
	prefix 		= require('gulp-autoprefixer'),
	sass 		= require('gulp-sass'),
	concat 		= require('gulp-concat'),
	rename 		= require('gulp-rename'),
	livereload 	= require('gulp-livereload');
	// livereload addon for firefox/chrome needed to work. 


//To minify css styles
gulp.task('styles', function(){
	gulp.src('sass/**/*.scss')
		.pipe(plumber())
		.pipe(prefix("last 15 version", "> 1%", "ie 8", "ie 7"))
		.pipe(sass({
			style: 'expanded',
			//style: 'compact',
			//style: 'compressed'		
		}))
		.pipe(gulp.dest(''))
		.pipe(livereload({ start: true }));
});

/*
*
* Scripts Tasks
* jsConcatFiles => list of javascript files (in order) to concatenate
*
**/

gulp.task('scripts', function() {
	return gulp.src('./js/*.js')
	.pipe(plumber())
	.pipe(concat('temp.js', {newLine: '\r\n\r\n'}))
	.pipe(rename('functions.min.js'))
	.pipe(gulp.dest('./js/min/'))
	.pipe(livereload({ start: true }));
});

// //To minify js scripts 
// gulp.task('scripts', function(){
// 	gulp.src('js/*.js')
// 		.pipe(plumber())
// 		.pipe(uglify())
// 		.pipe(gulp.dest('../js/'))
// 		.pipe(livereload({ start: true }));
// });

//To watch files to update live
gulp.task('watch', function(){
	gulp.watch('sass/**/*.scss', ['styles']);
	gulp.watch('./js/*.js', ['scripts']);
});


//To set deafult task for gulp
gulp.task('default', ['styles','scripts','watch']);
// gulp.task('default', ['scripts','watch']);