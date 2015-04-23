// gulpfile.js
var gulp 		= require('gulp'),
	plumber		= require('gulp-plumber'),
	prefix 		= require('gulp-autoprefixer'),
	sass 		= require('gulp-ruby-sass'),
	uglify 		= require('gulp-uglify'),
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
		.pipe(gulp.dest('../theme-name/'))
		.pipe(livereload({ start: true }));
});

//To minify js scripts 
gulp.task('scripts', function(){
	gulp.src('js/*.js')
		.pipe(plumber())
		.pipe(uglify())
		.pipe(gulp.dest('../theme-name/js/'))
		.pipe(livereload({ start: true }));
});

//To watch files to update live
gulp.task('watch', function(){
	gulp.watch('sass/**/*.scss', ['styles']);
	gulp.watch('js/*.js', ['scripts']);
});


//To set deafult task for gulp
gulp.task('default', ['styles','scripts','watch']);