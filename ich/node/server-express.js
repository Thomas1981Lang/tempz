var fs = require('fs');
var express = require('express');
var bp = require('body-parser');

var app = express();

var server = app.listen(5000, function () {
    console.log('Server gestartet. http://localhost:5000');
})
/*
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    next(); //ganz wichtig
})
*/


app.use(express.static('static'));

app.use(bp.urlencoded({ extended:true}));

app.post('/orte', function (req, res) {

});

app.get('/get_orte', function (req, res) {

});


app.post('/', function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end('OK')
});


app.get('/', function (req, res) {
    fs.readFile('d12-request.html', function (err, data) {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        })
        res.end(data);
    });
});