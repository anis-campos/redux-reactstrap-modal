const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const uglifyJs = require('uglifyjs-webpack-plugin');


const common = {
    mode:"production",
    optimization: {
        minimizer: [
            new uglifyJs({
                include: /\.min\.js$/
            })
        ]
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                enforce: "pre",
                test: /\.jsx?$/,
                loader: "eslint-loader",
                exclude: /node_modules/
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    devtool: 'source-map',
    externals: [nodeExternals()],
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })
    ]
};

const fontEnd = {
    entry: {
        'redux.reactstrap.modal': path.join(__dirname, "src", "index.js"),
        'redux.reactstrap.modal.min': path.join(__dirname, "src", "index.js")
    },
    output: {
        path: path.join(__dirname, "dist"),
        libraryTarget: 'umd',
        filename: "[name].js"
    },

};


const backEnd = {
    target: 'node',
    entry: {
        'redux.reactstrap.modal.node': path.join(__dirname, "src", "index.js"),
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].js",
        libraryTarget: "commonjs2"
    }
};

module.exports = [
    Object.assign({}, common, fontEnd),
    Object.assign({}, common, backEnd)
];
