import gulp from 'gulp';

require('require-dir')('./tasks');


gulp.task('default', gulp.series(
  'clean',
  gulp.parallel(
    'copy',
    'copyscript',
    'copycss',
    'fonts',
    'sprite',
    'symbols',
    // 'favicons',
    // 'webp'
  ),
  gulp.parallel('imgs', 'html', 'scss', 'scripts'),
  'serve'
));

gulp.task('prod', gulp.series(
  'clean',
  gulp.parallel(
    'copy',
    'copyscript',
    'copycss',
    'fonts',
    'sprite',
    'symbols',
    // 'favicons',
    // 'webp'
  ),
  gulp.parallel(
    'imgs',
    'html',
    'scssRev',
    'scripts',
    // 'gzip'
  ),
  'rev'
));
