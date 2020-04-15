const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


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
            },
            {
                test: /\.svg/,
                use: ["svg-url-loader"]
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        inject: true,
        template: require('html-webpack-template'),
        appMountId: 'app',
        title: 'My App',
        mobile: true,
        lang: 'en-US',
    })
    ],
    devServer:{
        open:true,
        inline:true,
        hot:true
    }
};
