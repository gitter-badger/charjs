// Karma configuration
// Generated on Wed May 17 2017 11:18:14 GMT+0900 (東京 (標準時))

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: './',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha','chai'],

    // list of files / patterns to load in the browser
    files: [
      './src/**/*.js',
      './test/**/*-test.js'
    ],

    // list of files to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      './src/**/*.js': ['coverage']
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha','junit','coverage','remap-coverage'],

    junitReporter: {
      outputDir: 'output/junit/'
    },

    coverageReporter: {
      // dir: 'output/js-coverage/',
      // reporters: [
      //   {type:'html'},
      //   {type:'cobertura'}
      // ]
      type: 'in-memory'
    },

    remapCoverageReporter: {
      'text-summary': null,
      html: './output/ts-coverage/',
      cobertura: './output/ts-coverage/cobertura.xml'
    },

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
