// Load plugins
var gulp = require( 'gulp' ),
  sass = require( 'gulp-ruby-sass' ),
  autoprefixer = require( 'gulp-autoprefixer' ),
  minifycss = require( 'gulp-minify-css' ),
  jshint = require( 'gulp-jshint' ),
  uglify = require( 'gulp-uglify' ),
  imagemin = require( 'gulp-imagemin' ),
  rename = require( 'gulp-rename' ),
  clean = require( 'gulp-clean' ),
  concat = require( 'gulp-concat' ),
  cache = require( 'gulp-cache' ),
  livereload = require( 'gulp-livereload' ),
  lr = require( 'tiny-lr' ),
  server = lr();

// Styles
gulp.task( 'styles', function () {
  return gulp.src( 'src/css/main.sass' )
    .pipe( sass( {
      style: 'expanded',
    } ) )
    .pipe( autoprefixer( 'last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4' ) )
    .pipe( gulp.dest( 'dist/css' ) )
    .pipe( rename( {
      suffix: '.min'
    } ) )
    .pipe( minifycss() )
    .pipe( livereload( server ) )
    .pipe( gulp.dest( 'dist/css' ) );
} );

// .pipe(jshint('.jshintrc'))
// .pipe(jshint.reporter('default'))

// Scripts
gulp.task( 'scripts', function () {
  return gulp.src( 'src/js/**/*.js' )
    .pipe( concat( 'main.js' ) )
    .pipe( gulp.dest( 'dist/js' ) )
    .pipe( rename( {
      suffix: '.min'
    } ) )
    .pipe( uglify() )
    .pipe( livereload( server ) )
    .pipe( gulp.dest( 'dist/js' ) );
} );

// Images
gulp.task( 'images', function () {
  return gulp.src( 'src/img/**/*' )
    .pipe( cache( imagemin( {
      optimizationLevel: 3,
      progressive: true,
      interlaced: true
    } ) ) )
    .pipe( livereload( server ) )
    .pipe( gulp.dest( 'dist/img' ) );
} );

// Clean
gulp.task( 'clean', function () {
  return gulp.src( [ 'dist/css', 'dist/js', 'dist/img' ], {
      read: false
    } )
    .pipe( clean() );
} );

// Default task
gulp.task( 'default', [ 'clean' ], function () {
  gulp.run( 'styles', 'scripts', 'images' );
} );

// Watch
gulp.task( 'watch', function () {

  // Listen on port 35729
  server.listen( 35729, function ( err ) {
    if ( err ) {
      return console.log( err )
    };

    // Watch .sass files
    gulp.watch( 'src/css/**/*.sass', function ( event ) {
      console.log( 'File ' + event.path + ' was ' + event.type + ', running tasks...' );
      gulp.run( 'styles' );
    } );

    // Watch .js files
    gulp.watch( 'src/js/**/*.js', function ( event ) {
      console.log( 'File ' + event.path + ' was ' + event.type + ', running tasks...' );
      gulp.run( 'scripts' );
    } );

    // Watch image files
    gulp.watch( 'src/img/**/*', function ( event ) {
      console.log( 'File ' + event.path + ' was ' + event.type + ', running tasks...' );
      gulp.run( 'images' );
    } );

  } );

} );