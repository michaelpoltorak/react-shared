var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function () {
    return {
        entry: {
            'index': './src/index.js'
        },
        output: {
            path: path.join(__dirname, '../build'),
            filename: '[name].bundle.js',
            publicPath: 'publicPath'
        },
        resolve: {
            extensions: ['jsx', '.js', '.json'],
            modules: [path.join(__dirname, 'src'), 'node_modules']

        },
        plugins: [
            new ExtractTextPlugin('styles.css')
        ],
        module: {
            loaders: [
                {
                    test: /\.json/,
                    loaders: ['json-loader'],
                    exclude: /node_modules/
                    //include: path.join(__dirname, 'src')
                },
                {
                    test: /\.js$/,
                    loaders: ['babel-loader'],
                    exclude: /node_modules/
                    //include: path.join(__dirname, 'src')
                },
                // Extract css files
                {
                    test: /\.css$/,
                    loader: ExtractTextPlugin.extract('css-loader!less-loader')
                },
                // Optionally extract less files
                // or any other compile-to-css language
                {
                    test: /\.less$/,
                    loader: ExtractTextPlugin.extract('css-loader!less-loader')
                }
            ],
        }
    }
}
