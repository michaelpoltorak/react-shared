var webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = function () {
    return webpackMerge(commonConfig(), {
        devServer: {
            proxy: {
                "/spot-services": "http://localhost" // <- backend
            },
            host: '0.0.0.0',
            port: 9001,
            inline: true,
            historyApiFallback: true
        },
        devtool: 'cheap-module-source-map',
        output: {
            sourceMapFilename: '[name].map',
            path: path.join(__dirname, '../build'),
            filename: '[name].bundle.js',
            publicPath: '/build/'
        },
        
        plugins: [
            new HtmlWebpackPlugin({
                hash: true,
                filename: 'index.html',
                template: __dirname + '/../templates/index_devel.html',
            }),
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify('devel')
                },
            }),
        ]
    })
}



