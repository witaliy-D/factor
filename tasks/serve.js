import gulp from 'gulp';
import server from 'browser-sync';

function reload(done) {
  server.reload();
  done();
}

gulp.task('serve', () => {
  server.init({
    server: 'dist'
  });

  gulp.watch(['src/**/*.html', '!src/tpl/**/*.html'], {events: ['unlink']}, gulp.series('cleanPages', 'html', reload));
  gulp.watch( 'src/tpl/**/*.html', {events: ['unlink']}, gulp.series('html', reload));
  gulp.watch('src/**/*.html', {events: ['change', 'add']}, gulp.series('html', reload));

  gulp.watch('src/scss/**/*.scss', gulp.parallel('scss'));

  gulp.watch(['src/js/**/*.js', '!src/js/components/*.js'], {events: ['unlink']}, gulp.series('cleanScripts', 'scripts', reload));
  gulp.watch( 'src/js/components/*.js', {events: ['unlink']}, gulp.series('scripts', reload));
  gulp.watch('src/js/**/*.js', {events: ['change', 'add']}, gulp.series('scripts', reload));

  gulp.watch(['src/img/**/*', '!src/img/favicon/*', '!src/img/sprite/*', '!src/img/symbols/*', '!src/img/libs/*'], {events: ['unlink']}, gulp.series(
    'cleanImgs',
    'imgs',
    'webp',
    reload
  ));
  gulp.watch(['src/img/**/*', '!src/img/favicon/*', '!src/img/sprite/*', '!src/img/symbols/*', '!src/img/libs/*'], {events: ['change', 'add']}, gulp.series(
    'imgs',
    'webp',
    reload
  ));

  gulp.watch('src/img/sprite/*', gulp.series('sprite', reload));

  gulp.watch('src/img/symbols/*', gulp.series('symbols', reload));

  gulp.watch('src/fonts/**/*', {events: ['unlink']}, gulp.series('cleanFonts', 'fonts', reload));
  gulp.watch('src/fonts/**/*', {events: ['add']}, gulp.series('fonts', reload));
});
