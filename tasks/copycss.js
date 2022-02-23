import gulp from 'gulp';


gulp.task('copycss', () => {
  return gulp.src('src/css/*')
    .pipe(gulp.dest('dist/css'));
});
