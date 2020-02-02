var gulp = require('gulp');
var sass = require('gulp-sass');
var paths = ['./*.scss', 'archive/**/*.scss']

// compile the sass in the current directory
gulp.task('sass', function(){
    return gulp.src(paths, {base: './'})
    .pipe(sass())
    .pipe(gulp.dest('.'))
});

gulp.task('default',
gulp.series(['sass']));

