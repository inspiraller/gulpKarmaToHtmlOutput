var gulp = require('gulp');
var KarmaTestServer = require('karma').Server;

gulp.task('testKarma', function (done) {
  new KarmaTestServer({
    configFile: require('path').resolve('karma.conf.js'),
    singleRun: true
    /*
    singleRun: true,
    htmlReporter: {
      outputFile: 'testOutput/units.html',
      // Optional
      pageTitle: 'Unit Tests',
      subPageTitle: 'A sample project description'
    }

console.log();*/

  }, function(error){

  	error = error ? new Error('Karma returned with the error code: ' + error) : undefined;

    done(error);

  }).start();
});



//gulp.task('test', ['testJasmine','testKarma']);
gulp.task('test', ['testKarma']);