
var gulp = require('gulp');
var serve = require('gulp-serve');
var inline = require('gulp-inline-source');
var babelCore = require('babel-core');

function transpileString(source, context, next) {
  if (source.fileContent && !source.content && (source.type == 'js')) {
    source.content = babelCore.transform(source.fileContent, {
      minified: true,
      comments: false,
      presets: ['es2015', 'stage-0']
    }).code;
    next();
  } else {
    next();
  }
}

gulp.task('inline', function () {
  gulp.src('./index.html')
    .pipe(inline({ handlers: [ transpileString ] }))
    .pipe(gulp.dest('./dist'))
});

gulp.task('serve', serve('dist'));

gulp.task('default', ['inline', 'serve']);
