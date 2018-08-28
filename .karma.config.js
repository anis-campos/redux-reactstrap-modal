// Karma configuration
// Generated on Tue Oct 31 2017 22:04:35 GMT+0100 (CET)

const webpack = require('./webpack.config');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = (config) => {
    const coverage = config.singleRun ? ['coverage'] : [];
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['mocha', 'chai'],


        // list of files / patterns to load in the browser
        files: [
            'test/**/*.js'
        ],


        // list of files to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            ['./test/**/*.js']: ['webpack', 'sourcemap']
        },

        // A lot of people will reuse the same webpack config that they use
        // in development for karma but remove any production plugins like UglifyJS etc.
        // I chose to just re-write the config so readers can see what it needs to have
        webpack: {
            ...webpack,
            output: null,
            devtool: 'inline-source-map',
            module: {
                // don't run babel-loader through the sinon module
                noParse: [
                    /node_modules\/sinon\//
                ],
                rules: webpack.module.rules,

            },
            stats: {
                colors: true,
                reasons: true,
            },
            plugins: [new ExtractTextPlugin("style.css")],

        },
        // required for enzyme to work properly
        externals: {
            'jsdom': 'window',
            'cheerio': 'window',
            'react/lib/ExecutionEnvironment': true,
            'react/lib/ReactContext': 'window'
        },

        plugins: [
            'karma-mocha',
            'karma-chai',
            'karma-sourcemap-writer',
            'karma-sourcemap-loader',
            'karma-webpack',
            'karma-coverage',
            'karma-remap-istanbul',
            'karma-spec-reporter',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-phantomjs-launcher'
        ],
        webpackMiddleware: {
            noInfo: true
        },
        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['dots'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_DEBUG,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    })
};
