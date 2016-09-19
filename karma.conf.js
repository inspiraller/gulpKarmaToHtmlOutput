// 1) install


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
    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter

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


    /*
    preprocessors: {
      // source files, that you wanna generate coverage for
      // do not include tests or libraries
      // (these files will be instrumented by Istanbul)
      'www/lib/*.js': ['coverage']
    }, */

    // optionally, configure the reporter
    // coverageReporter: {
    //   type : 'html',
    //   dir : 'coverage/'
    // },

    // // Don't forget to add 'karma-coverage' to your list of plugins
    // plugins: [  
    //   'karma-jasmine',
    //   'karma-coverage',
    //   'karma-phantomjs-launcher'
    // ],

    // // web server port
    // port: 9876,


    // // enable / disable colors in the output (reporters and logs)
    // colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_DEBUG,


    // // enable / disable watching file and executing tests whenever any file changes
    // autoWatch: false,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true

  })
}
