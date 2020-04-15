const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const publicPath = (mode) => {
    if (mode === 'production')
        return '/redux-reactstrap-modal/';
    return '/';
};

module.exports = (env, { mode = 'production' }) => ({
    mode,
    devtool: 'eval-source-map',
    entry: path.join(__dirname, 'examples', 'index.js'),
    output: {
        path: path.join(__dirname, 'build'),
        publicPath: publicPath(mode),
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
});
