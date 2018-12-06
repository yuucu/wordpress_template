var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var rename = require('gulp-rename');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync');

gulp.task('sass', function() {
  var option = {
    outputStyle: 'expanded',
  };

  return gulp.src('./scss/**/*.scss')
  .pipe(plumber())
  .pipe(sass(option))
  .pipe(gulp.dest('./'))
  .pipe(browserSync.stream());
});

gulp.task('pug', function() {
  var option = {
    pretty: true,
  };

  return gulp.src(['./pug/**/*.pug'])
  .pipe(plumber())
  .pipe(pug(option))
  .pipe(rename({
    extname: '.php'
  }))
  .pipe(gulp.dest('./'));
});

gulp.task('browser-sync', function () {
    browserSync({
        // vccwで設定したipアドレス
        proxy: "192.168.33.10"
    });
});
gulp.task('reload', () => {
  browserSync.reload();
});

gulp.task('watch', function() {
  gulp.watch('./scss/**/*.scss', ['sass', 'reload']);
  gulp.watch('./pug/**/*.pug', ['pug', 'reload']);
});

gulp.task('default', ['browser-sync', 'sass', 'pug', 'watch']);
