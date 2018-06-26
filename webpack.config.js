const webpack = require('webpack')
import path from 'path';
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');

const dist = path.resolve(__dirname, 'dist');
const appSrc = path.resolve(__dirname, 'src');
// filename: '[name]-bundle.js',
//https://medium.freecodecamp.org/learn-webpack-for-react-a36d4cac5060

const port = process.env.PORT || 3000;

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: [
        './src/index.js'
    ],
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin([dist]),
        new HtmlWebpackPlugin({
            title: 'Hot Module Reload',
            template: 'src/index.html',
            filename: 'index.html',
            chunks: ['bundle']
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
};

