var http = require('http'); // für http request
var fs = require('fs'); //filesystem

http.createServer(function (request, response) {


    console.log('Anfrage an den Webserver');

    console.log(request.url);

    if ( request.url == '/') {
        response.writeHead(200, {'Content-Type':'text/html'})
        fs.readFile('test.html', function(err, data) {
            response.end(data);

        });
    } else {
        response.writeHead(404)
        response.end('Error 404!!!');
    }

   


}).listen(12345);

console.log('Server ist gestartet!');
console.log('URL: http://localhost:12345');