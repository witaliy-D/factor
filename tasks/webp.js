import gulp from 'gulp';
import gulpif from 'gulp-if';
import imageminWebp from 'imagemin-webp';
import webp from 'gulp-webp';
import debug from 'gulp-debug';
import yargs from 'yargs';

const argv = yargs.argv;
const production = !!argv.production;

gulp.task('webp', () => {
  return gulp.src('src/img/*.{jpeg,png,jpg}')
    .pipe(webp(gulpif(production, imageminWebp({
      lossless: true,
      quality: 100,
      alphaQuality: 100
    }))))
    .pipe(debug({title: 'webp'}))
    .pipe(gulp.dest('dist/img'));
});
