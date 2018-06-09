var gulp = require('gulp'),
modernizr = require('gulp-modernizr');

gulp.task('modernizr', function() {
<<<<<<< HEAD
	return gulp.src(['./app/assets/styles/**/*.css', './app/assets/scripts/**/*.js'])
	.pipe(modernizr({
		"options": [
			"setClasses"
		]
	}))
	.pipe(gulp.dest('./app/temp/scripts/'));
=======
  return gulp.src(['./app/assets/styles/**/*.css', './app/assets/scripts/**/*.js'])
    .pipe(modernizr({
      "options": [
        "setClasses"
      ]
    }))
    .pipe(gulp.dest('./app/temp/scripts/'));
>>>>>>> build-task
});