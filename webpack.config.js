module.exports = function(env) {
    
    return require('./webpack/webpack.' + env.env + '.js')({ env: env.env })
}