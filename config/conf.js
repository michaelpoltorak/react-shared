var env = process.env.NODE_ENV || 'devel';
var cfg = require('./' + env);
var common = require('./common')
cfg = Object.assign({}, cfg, 
    common    
);
module.exports = cfg;
