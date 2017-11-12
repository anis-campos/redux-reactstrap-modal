const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const ReactRootPlugin = require('html-webpack-react-root-plugin');


module.exports = {
    devtool: 'eval-source-map',
    entry: path.join(__dirname, "examples", "index.js"),
    output: {
        path: path.join(__dirname, "dist"),
        publicPath: '/',
        filename: "index.js"
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react']
                    }
                }
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }, {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            }
        ],
        loaders: [
            {test: /\.scss$/, loader: 'style!css!sass'}
        ]
    },
    plugins: [new HtmlWebpackPlugin(), new ReactRootPlugin('app'), new OpenBrowserPlugin({url: 'http://localhost:9000'})],

    devServer: {
        contentBase: path.join(__dirname, "public"),
        compress: true,
        port: 9000
    }
};
