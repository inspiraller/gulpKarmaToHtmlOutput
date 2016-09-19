# README #

How to set up gulp, jasmine, karma, karma-htmlfile-reporter to generate a html file that looks like jasmine output.
Time lapse: 1 week into 15 mins.


## Pre-requisites - install the following globally:
- gulp
- karma-cli
- vinyl-source-stream
- phantomjs

## Do not install karma globally. To check go to:
	C:\Users\[your name]\AppData\Roaming\npm\node_modules
	 and remove it.


## change directory to your new project:
	$ cd to new dir - c:\yourlocationetc\

## create package.json file:
	$ npm init - to generate own package.json file

## Install npm dependencies:
	$ npm install gulp karma karma-jasmine karma-phantomjs-launcher karma-htmlfile-reporter --save-dev

## Create your jasmine tests: 
	jasmineSpecTests/spec/helloworld.spec.js
```javascript	
		describe("hello world", function() {
			it('should somePlugin()  === "somePlugin"', function () {
		  		expect(somePlugin()).toBe('somePlugin2ddd');
			});
		});
```
## Create web root folder with js:
	www/lib/somePlugin.js
		var somePlugin = function(){
			return 'somePlugin2';
		};	

## Create Karma file:
```javascript
	karma.conf.js

	// Karma configuration
	// Generated on Thu Mar 10 2016 22:53:05 GMT+0000 (GMT Standard Time)
	// Then customized 
	// https://github.com/nikku/karma-browserify


	module.exports = function(config) {
	  config.set({

	    // base path that will be used to resolve all patterns (eg. files, exclude)
	    // relative to karma.conf.js 

	    basePath: './',

	    // list of files / patterns to load in the browser
	    files: [
	        'www/lib/*.js', // source files first...
	        'jasmineSpecTests/**/*spec.js'   // test files next...
	    ],
	    frameworks: ['jasmine'],

	    reporters: ['progress', 'html'],
	 
	    // the default configuration 
	    htmlReporter: {
	      outputFile: 'jasmineSpecTests/testOutput/units.html',
	            
	      // Optional 
	      pageTitle: 'Unit Tests',
	      subPageTitle: 'A sample project description',
	      groupSuites: true,
	      useCompactStyle: true,
	      useLegacyStyle: true
	    },
	    logLevel: config.LOG_DEBUG,
	    browsers: ['PhantomJS'],
	    singleRun: true
	  })
	}
```

## Create gulp file:
```javascript
	var gulp = require('gulp');
	var KarmaTestServer = require('karma').Server;

	gulp.task('testKarma', function (done) {
	  new KarmaTestServer({
	    configFile: require('path').resolve('karma.conf.js'),
	    singleRun: true
	  }, function(error){
	  	error = error ? new Error('Karma returned with the error code: ' + error) : undefined;
	    done(error);
	  }).start();
	});
	gulp.task('test', ['testKarma']);
```

## Run tests:
	gulp test

## Output:
	jasmineSpecTests/testOutput/units.html

