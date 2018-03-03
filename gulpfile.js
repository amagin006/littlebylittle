var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var notify  = require('gulp-notify');

gulp.task('sass', function(){
          return gulp.src('./sass/**/*.scss')
            .pipe(plumber({
            errorHandler: notify.onError("Error: <%= error.message %>") //<-
             }))
            .pipe(sass({outputStyle: 'expanded'}))
            .pipe(gulp.dest('./css'));
          });

gulp.task('watch', function(){
    gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);