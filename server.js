var express = require('express');
var path = require('path');
var config = require('./config/conf.js');
var app = express();

// Get routes from separate file 
require('./config/routes.js')(app);

// Setting static files directories
app.use('/build', express.static(__dirname + '/build'));
app.use('/less', express.static(__dirname + '/less'));
app.use('/images', express.static(__dirname + '/images'));

// Start with index.html
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(9001, '0.0.0.0', 'localhost', function() {
    console.log('PROD ', process.env.NODE_ENV);
    console.log('running application on port: 9001');
});