module.exports = function(env) {
    var mode = env && env.mode || 'devel';
    return require('./webpack/webpack.' + mode + '.js')();
}