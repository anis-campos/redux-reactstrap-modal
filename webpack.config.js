const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');


module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    entry: path.join(__dirname, 'examples', 'index.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: 'index.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            jquery: 'jquery/src/jquery',
            'sinon': 'sinon/pkg/sinon'
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }, {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }, {
                test: /\.less$/,
                use: [{
                    loader: 'style-loader' // creates style nodes from JS strings
                }, {
                    loader: 'css-loader' // translates CSS into CommonJS
                }, {
                    loader: 'less-loader' // compiles Less to CSS
                }]
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        inject: false,
        template: require('html-webpack-template'),
        appMountId: 'app',
    }),
        new OpenBrowserPlugin({url: 'http://localhost:9000'}),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        })
    ],

    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 9000
    }
};
