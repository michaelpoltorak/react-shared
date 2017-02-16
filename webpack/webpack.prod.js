const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = function() {
    return webpackMerge(commonConfig(), {
        output: {
            path: path.join(__dirname, '../build'),
            filename: '[name].bundle.js',
            publicPath: '/tt/dist'
        },
        plugins: [
            new ExtractTextPlugin('styles.css'),
            new HtmlWebpackPlugin({
                hash: true,
                filename: 'index.html',
                template: __dirname + '/../templates/index_prod.html',
            }),
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify('production')
                }
            }),
            new webpack.optimize.UglifyJsPlugin({
                beautify: false,
                comments: false
            }),
            new ExtractTextPlugin("styles.css")
        ]
    })
}