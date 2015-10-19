var gulp = require('gulp');
var jscs = require('gulp-jscs');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');
var notify = require("gulp-notify");
var sass = require("gulp-sass");

var del = require('del');
var merge = require('event-stream').merge;
var runSequence = require('run-sequence');
var browserSync = require('browser-sync');
var reload = browserSync.reload;


gulp.task('build:lib',function(cb){
  return gulp.src([
    'vendor/bower/pixi.js/bin/pixi.min.js'
  ])
    .pipe(plumber({
      errorHandler: notify.onError("Error: <%= error.message %>")
    }))
    .pipe(concat('lib.js'))
    .pipe(gulp.dest('dist/html/js'),cb);
});

gulp.task('build:js',function(cb){
  return gulp.src(['src/app/modeles/**/*.js','src/app/main/*.js'])
    .pipe(plumber({
      errorHandler: notify.onError("Error: <%= error.message %>")
    }))
    .pipe(jscs())
    .pipe(babel())
    .pipe(concat('all.js'))
    .pipe(gulp.dest('dist/html/js'),cb);
});

gulp.task('build:sass',function(cb){
  return gulp.src('src/styles/styles.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/html/css'),cb);
});

gulp.task('copy:html',function(cb){
  return gulp.src('src/static/**/*.html')
    .pipe(gulp.dest('dist/html'),cb);
});

gulp.task('browser-sync', function(cb) {
    browserSync({
        server: {
            baseDir: 'dist/'
        }
    });
});

gulp.task('watch', function(cb){
  gulp.watch('./src/**/*.*',['build']);
});

gulp.task('build',['build:lib','build:js','build:sass','copy:html']);
gulp.task('default',['build','browser-sync']);
gulp.task('develop',['default','watch']);
