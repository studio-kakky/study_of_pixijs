var gulp = require('gulp');
var del = require('del');
var merge = require('event-stream').merge;
var runSequence = require('run-sequence');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var browserSync = require('browser-sync');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');
var reload = browserSync.reload;
var notify = require("gulp-notify");
