
const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');
var run = require('gulp-run-command').default;

gulp.task('styles', () => {
    return gulp.src('./app/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./app/css/'));
});

gulp.task('clean', () => {
    return del([
        './app/css/*.css',
    ]);
});

gulp.task('default', gulp.series(['clean', 'styles']));

gulp.task('watch', () => {
    gulp.watch('./app/**/*.scss', (done) => {
        gulp.series(['clean', 'styles'])(done);
    });
    gulp.watch('./app/app.js', async () => run( 'browserify ./app/app.js -o ./app/lib/bundle.js')());
});

