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
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader']

            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        inject: false,
        template: require('html-webpack-template'),
        appMountId: 'app',
    }),
        new OpenBrowserPlugin({url: 'http://localhost:9002/webpack-dev-server/'})
    ],

    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 9002
    }
};
