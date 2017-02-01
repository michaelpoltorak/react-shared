const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function() {
    return webpackMerge(commonConfig(), {
        plugins: [
            new ExtractTextPlugin('styles.css'),
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