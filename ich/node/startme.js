var fs = require('fs');
var cp = require('child_process');

var file = 'server-linien.js';
var server = cp.fork(file); //startet den SErver
console.log( file +  'gestartet');

fs.watchFile( file, function() {
    server.kill();
    console.log( file + ' beendet')
    server = cp.fork(file);
    console.log( file + ' gestartet')
});