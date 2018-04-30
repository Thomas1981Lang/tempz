//Module

var express = require('express');
//var fs = require('fs');
//var bp = require('socket.io');
var socket = require('socket.io');


var app = express();
var server = app.listen(26893, function () {
    console.log('WIFI Secret Chat');
});

app.use(express.static('static'));

app.get('/', function (request, response) {
    response.sendFile(__dirname + '/d13-chat.html');
});

var online = [];
var io = socket(server);
io.on('connection', function (socket) {
    console.log('Neuer Benutzer online.');
    var user; 
    socket.on('neueruser', function (name) {
        user = name;
        
        console.log(online);
        io.emit('servershout', '<em><b>' + name + '</b> ist online.</em>');
        for ( var i in online) {
        io.emit('servershout', '<em><b>zurzeit online: ' + online[i] + '</b></em>')
    }
    online.push(user);
    });

socket.on('disconnect', function() {
    io.emit('servershout', '<em>' + user + ' ist offline</em>');
    var del = online.indexOf('user');
    online.splice(del, 1);
    
})
    
socket.on('clientshout', function(msg, time) {

    io.emit('servershout', time + ' <b> ' + user + '<b>: ' + msg );
})


});