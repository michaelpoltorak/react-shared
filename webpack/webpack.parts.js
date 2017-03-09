const webpack = require('webpack');
exports.devServer = function(host, port) {
  return {
    devServer: {
      historyApiFallback: true,
      inline:true,
      hot:true,
      stats: 'errors-only',
      host: host, // Defaults to `localhost`
      port: port, // Defaults to 8080
      overlay: {
        errors: true,
        warnings: true,
      },
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
    ],
  };
};