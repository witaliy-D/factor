import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import pngquant from 'imagemin-pngquant';
import spritesmith from 'gulp.spritesmith';
import merge from 'merge-stream';

gulp.task('sprite', () => {
  const spriteData = gulp.src('src/images/sprite/*')
    .pipe(imagemin([imagemin.mozjpeg({progressive: true}), pngquant()]))
    .pipe(
      spritesmith({
        imgName: 'sprite.png',
        cssName: 'sprite.scss',
        imgPath: '../images/sprite.png',
        padding: 1
      })
    );
  const imgStream = spriteData.img
    .pipe(gulp.dest('dist/images'));
  const cssStream = spriteData.css
    .pipe(gulp.dest('src/scss/base'));
  return merge(imgStream, cssStream);
});
