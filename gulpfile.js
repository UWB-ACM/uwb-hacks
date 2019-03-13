var gulp = require('gulp');
var sass = require('gulp-sass');

// compile the sass in the current directory
gulp.task('sass', function(){
    return gulp.src('*.scss')
    .pipe(sass())
    .pipe(gulp.dest('.'))
});

gulp.task('default',
gulp.series(['sass']));

