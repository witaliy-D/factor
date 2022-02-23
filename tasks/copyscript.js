import gulp from 'gulp';


gulp.task('copyscript', () => {
  return gulp.src(['src/js/**/*', '!src/js/main.js'])
    .pipe(gulp.dest('dist/js'));
});
