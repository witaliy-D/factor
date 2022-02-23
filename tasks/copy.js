import gulp from 'gulp';


gulp.task('copy', () => {
  return gulp.src('src/assets/**/*')
    .pipe(gulp.dest('dist'));
});
