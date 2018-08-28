const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                include: /\.min\.js$/
            })
        ]
    },
    entry: {
        'redux.reactstrap.modal': path.join(__dirname, "src", "index.js"),
        'redux.reactstrap.modal.min': path.join(__dirname, "src", "index.js")
    },
    output: {
        path: path.join(__dirname, "build"),
        libraryTarget: 'umd',
        filename: "[name].js"
    },

    devtool: 'source-map',

    externals: [
        'bootstrap',
        'normalizr',
        'react',
        'react-dom',
        'react-redux',
        'react-transition-group',
        'reactstrap',
        'redux',
        'seamless-immutable',
        'prop-types',
        'jquery',
        'popper.js'
    ],

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            },
            {
                enforce: "pre",
                test: /\.jsx?$/,
                loader: "eslint-loader",
                exclude: /node_modules/
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }, {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            }
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })
    ]
};
