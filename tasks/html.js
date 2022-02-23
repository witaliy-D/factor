import gulp from 'gulp';
import plumber from 'gulp-plumber';
// import gulpif from 'gulp-if';
import panini from 'panini';
// import replace from 'gulp-replace';
import debug from 'gulp-debug';
// import yargs from 'yargs';
import notify from 'gulp-notify';

// const argv = yargs.argv;
// const production = !!argv.production;

gulp.task('html', () => {
  const onError = function (err) {
    notify.onError({
      title: 'Error in pug task',
      message: 'Error: <%= error.message %>',
      sound: 'Beep'
    })(err);
    this.emit('end');
  };//
  panini.refresh();
  return gulp.src('src/*.html')
  //   .pipe(plumber({
  //     errorHandler(err) {
  //       console.log(err.message);
  //       this.emit('end');
  //     }
  //   }))
    .pipe(plumber({errorHandler: onError}))
    .pipe(panini({
      root: 'src/',
      layouts: 'src/tpl/layouts/',
      partials: 'src/tpl/partials/',
      helpers: 'src/tpl/helpers/',
      data: 'src/tpl/data/'
    }))
    // .pipe(gulpif(production, replace('.css', '.min.css')))
    // .pipe(gulpif(production, replace('.js', '.min.js')))
    .pipe(debug({title: 'html'}))
    .pipe(gulp.dest('dist'));
});
