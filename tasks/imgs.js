import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import pngquant from 'imagemin-pngquant';
import yargs from 'yargs';
import gulpif from 'gulp-if';

const argv = yargs.argv;
const production = !!argv.production;

const pluginsSvgo = [
  {removeViewBox: true},
  {removeTitle: true}
];

const pluginsImagemin = [
  imagemin.mozjpeg({progressive: true}),
  pngquant()
];

gulp.task('imgs', () => {
  return gulp.src(['src/images/*/**', 'src/images/*', '!src/images/sprite/*', '!src/images/symbols/*', '!src/images/sprite', '!src/images/symbols'])
    .pipe(imagemin([imagemin.svgo({plugins: pluginsSvgo})]))
    .pipe(gulpif(production, imagemin(pluginsImagemin)))
    .pipe(gulp.dest('dist/images'));
});
