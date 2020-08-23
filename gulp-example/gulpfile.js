const gulp = require('gulp');

const imagemin = require('gulp-imagemin');
const cleanCss = require('gulp-clean-css');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('imagemin', async function(){
    gulp.src('src/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/img/'))
})

gulp.task('styles', async function (){
    gulp.src([   
            'src/startbootstrap-creative-gh-pages/vendor/fontawesome-free/css/all.css',
            'src/startbootstrap-creative-gh-pages/vendor/magnific-popup/magnific-popup.css',
            'src/startbootstrap-creative-gh-pages/css/creative.css'
        ])
        .pipe(concat('main.css'))
        .pipe(autoprefixer('last 1 version'))
        .pipe(cleanCss())
        .pipe(gulp.dest('build/css/'))
})

gulp.task('fontAwesome', async function(){
    gulp.src('src/startbootstrap-creative-gh-pages/vendor/fontawesome-free/webfonts/*')
        .pipe(gulp.dest('build/webfonts'))
})

gulp.task('default', gulp.parallel('imagemin','styles','fontAwesome', function(){
    gulp.watch([   
        'src/startbootstrap-creative-gh-pages/vendor/fontawesome-free/css/all.css',
        'src/startbootstrap-creative-gh-pages/vendor/magnific-popup/magnific-popup.css',
        'src/startbootstrap-creative-gh-pages/css/creative.css'
    ], gulp.series('styles'))
}))