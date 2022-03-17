var gulp = require("gulp");
var minify = require("gulp-minify");
var rename = require("gulp-rename");

gulp.task("pack-js", function () {
  return gulp
    .src("src/js/index.js", { allowEmpty: true })
    .pipe(minify({ noSource: true }))
    .pipe(rename("index.min.js"))
    .pipe(gulp.dest("dist"));
});
