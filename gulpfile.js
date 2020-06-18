/**
 * Created by Zed on 2019/8/29.
 */

var gulp = require('gulp'),
  connect = require('gulp-connect');

// gulp.task('webserver', function() {
//   connect.server({
//     root: '/',
//     port: 2333
//   });
// });

gulp.task('default', function() {
  connect.server({
    root: 'dist',
    port: 8080
  });
});
