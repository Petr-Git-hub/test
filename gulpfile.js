const gulp = require('gulp');
const scss = require('gulp-sass');
const watchSass = require("gulp-watch-sass");
const concat_css = require('gulp-concat-css');
const minify_css = require('gulp-minify-css');
const notify = require('gulp-notify');
const group_media = require("gulp-group-css-media-queries");
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const autoprefix = require('gulp-autoprefixer');
const shorthand = require('gulp-shorthand');
const imagemin = require("gulp-imagemin");


gulp.task('imagemin', function (){
    return gulp.src('assets/images/*')
        .pipe(
            imagemin({
                progressive: true,
                svgoPlugins: [{removeViewBox: false}],
                interlaced: true,
                optimizationLevel: 3 // 0 to 7
            })
        )
        .pipe(gulp.dest('assets/images/'));
});

gulp.task('css-vendor', function () {
    return gulp.src([
        '',

    ])
        .pipe(concat_css('vendor.css'))

        .pipe(minify_css({keepSpecialComments: false}))
        .pipe(gulp.dest('assets/css'))
        .pipe(notify({
            message: 'css-vendor success'
        }));
});


gulp.task('scripts', function () {
    return gulp
        .src([
            "",
        ])
        .pipe(concat("script.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest("assets/js"))
        .pipe(
            notify({
                message: "js success",
            })
        );
});
gulp.task('scss', function () {
    return gulp.src('assets/scss/style.scss')
        .pipe(scss({outputStyle: 'compressed'}).on('error', scss.logError))
        .pipe(group_media())
        .pipe(shorthand())
        .pipe(autoprefix({
            browsers: [
                '> 0.1%',
                'iOS >=7',
                'last 3 version',
                'firefox >= 4',
                'safari 7',
                'safari 8',
                'safari 5',
                'ie 8',
                'ie 9',
                'IE 10',
                'IE 11',
                'opera 12.1',
                'ios 6',
                'android 4'
            ],
            cascade: false
        }))
        .pipe(gulp.dest('assets/css'))
        .pipe(notify({
            message: 'scss success'
        }));
});


gulp.task('watch', function () {
    gulp.watch('assets/scss/**/*.scss', gulp.parallel('scss'));
    gulp.watch('assets/js/script.js', gulp.parallel('scripts'));
});

gulp.task('default', gulp.parallel('scss', 'css-vendor', 'scripts'));

