const gulp = require('gulp');
const less = require('gulp-less');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');

// Define paths
const paths = {
  styles: {
    src: 'less/style.less',
    dest: 'dist/css/'
  }
};

// Compile Less to CSS
function compileStyles() {
  return gulp.src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.styles.dest));
}

// Watch for changes to Less files
function watch() {
  gulp.watch('less/**/*.less', compileStyles);
}

// Export tasks
exports.watch = watch;
exports.default = gulp.series(compileStyles, watch);
