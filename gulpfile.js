var gulp = require('gulp'),
livereload = require('gulp-livereload'),
webpack = require('gulp-webpack')
connect = require('gulp-connect');
gulp.task('watch',function(){
     gulp.watch('./app/*.html',['html']);
     gulp.watch('./app/**/*.js', ['scripts']);
}) 
gulp.task('webserver', function() {
    connect.server({
        port: 3009,
    });
});

gulp.task('default', ['webserver','watch']);