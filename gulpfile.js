var browserSync = require('browser-sync').create();
var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var useref = require('gulp-useref');
var imagemin  =require('gulp-imagemin');

gulp.task('browserSync', function() {
    browserSync.init({
      server: {
        baseDir: 'app'
      },
    })
})

gulp.task('useref', function(){
  return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulp.dest('dist'))
});

gulp.task('sass', function() {
    return gulp.src('app/scss/**/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('app/css'))
      .pipe(gulp.dest('dist/css'))
      .pipe(browserSync.reload({
        stream: true
      }))
});

gulp.task('images', function(){
    return gulp.src('app/images/**/*.+(png|jpg|jpeg|gif|svg)')
    .pipe(imagemin({
        interlaced: true
      }))
    .pipe(gulp.dest('dist/images'))
});

gulp.task('fonts', function() {
  return gulp.src('app/fonts/**/*')
  .pipe(gulp.dest('dist/fonts'))
})

gulp.task('js', function() {
    return gulp.src('app/js/*.js')
    .pipe(gulp.dest('dist/js'))
})


gulp.task('watch', gulp.parallel('browserSync'), function (){
    gulp.watch('app/scss/**/*.scss', ['sass']);
    gulp.watch('app/*.html', browserSync.reload); 
    gulp.watch('app/js/**/*.js', browserSync.reload); 
  });



gulp.task('default',gulp.parallel('sass', 'useref', 'images', 'fonts', 'js'), function (){
    console.log('Building files....');
})

gulp.task('serve',gulp.parallel('default', 'watch'), function (){
    console.log('Building and serving files....');
})
