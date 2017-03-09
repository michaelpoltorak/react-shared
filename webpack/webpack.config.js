require('dotenv').config();
const webpack = require('webpack');
const merge = require('webpack-merge');
const parts = require('./webpack.parts');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

require('react-hot-loader/patch');

const PORT = process.env.PORT;
const BUILD_PATH = process.env.BUILD_PATH;
const BASE_PATH = process.env.BASE_PATH;

const PATHS = {
    app: path.join(__dirname, '../src/index.js'),
    build: path.join(__dirname, '../' + BUILD_PATH),
    publicPath: '/' + BUILD_PATH,
    bundleName: 'index.bundle.js'
};

const commonConfig = merge([
    {
        entry: {
            app: [
                'react-hot-loader/patch',
                PATHS.app
            ]
        },
        output: {
            path: PATHS.build,
            publicPath: PATHS.publicPath,
            filename: PATHS.bundleName
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './templates/index.template.ejs'
            }),
            new ExtractTextPlugin('styles.css'),
            new Dotenv({
                path: './.env',
                safe:'./.env-sample'
            }),
            new CopyWebpackPlugin([
                { from: 'images', to: 'images' }
            ])
        ],
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    loaders: ['babel-loader'],
                    exclude: /node_modules/
                },
                {
                    test: /\.css$/,
                    loader: ExtractTextPlugin.extract('css-loader!less-loader')
                },
                {
                    test: /\.less$/,
                    loader: ExtractTextPlugin.extract('css-loader!less-loader')
                },

                { 
                    test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3)$/, 
                    loader: "file-loader" 
                }
            ]

        },
        node: {
            fs: 'empty'
        }
    },
    //parts.lintJavaScript({ include: PATHS.app }),
]);

const productionConfig = merge([
    {
        plugins: [
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('production')
            }),
            new webpack.optimize.UglifyJsPlugin({
                beautify: false,
                comments: false
            })
        ]
    }
]);

const developmentConfig = merge([
    {
        plugins: [
            new webpack.NamedModulesPlugin(),
        ],
    },
    parts.devServer('localhost', PORT)
]);

module.exports = function (env) {
    if (env && env.production) {
        return merge(commonConfig, productionConfig);
    }
    return merge(commonConfig, developmentConfig);
};