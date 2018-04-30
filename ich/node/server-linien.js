console.log('server-linien.js');

var express = require('express');
var bp = require('body-parser');
var fs = require('fs');
var request = require('request');
var csv = require('csv');
var ubahnen;
var haltestellen;
var steige;


//schreibe die Ubahnen in .json datei
fs.readFile('ubahnen.json', function(err, data) {
    try {
        ubahnen = JSON.parse(data);
    } catch(e) {
        ubahnen = {};
    }
});

//schreibe die Haltestellen in .json datei
fs.readFile('haltestellen.json', function(err, data) {
    try {
        haltestellen = JSON.parse(data);
    } catch(e) {
        haltestellen = {};
    }
});


//schreibe die Bahnsteige in .json datei
fs.readFile('steige.json', function(err, data) {
    try {
        steige = JSON.parse(data);
    } catch(e) {
        steige = {};
    }

});



//Server konfigurieren
var app = express();

var server = app.listen(5001, function () {
    console.log('Server läuft Port 5001')
});

app.use(bp.urlencoded({
    extended: true
}));
app.use(express.static('static'));




// URL Request auf Startseite
app.get('/', function (request, response) {
    response.sendFile(
        __dirname + '/d14-linien.html'
    );
});


// URL Request für Linien
app.post('/getWLData', function (req, res) {
    //lade CSV von WL
    console.log('Daten von WL werden geladen.');
    request.get('https://data.wien.gv.at/csv/wienerlinien-ogd-linien.csv', function(err, response, body) {
        if(!err && response.statusCode == 200) {
            console.log(body);
            csv.parse(body, {delimiter: ';'}, function(error,data) {
                console.log(data);
                //var ubahnen = {};
                //bei 1 starten, weil 0 sind Spaltenbezeichnung
                for (let i = 1; i < data.length; i++) {
                    if(data[i][4] != 'ptMetro') continue;
                    ubahnen[data[i][1]] = data[i][0];
                }
                console.log(ubahnen);
                fs.writeFile('ubahnen.json', JSON.stringify(ubahnen), function () {
                    


                    res.writeHead(200, {'Content-Type': 'application/json'});
                    res.end('{"result": "sucess"}');
                });
            });
        } else {
            res.code(404).end();
        }
    });
});



// URL Request für Linien
//app.post('/getWLHData', function (req, res) {
    //lade CSV von WL
//    console.log('Haltestellen-Daten von WL werden geladen.');
//    request.get('https://data.wien.gv.at/csv/wienerlinien-ogd-haltestellen.csv', function(err, response, body) {
 //       if(!err && response.statusCode == 200) {
 //           console.log(body);
 //           csv.parse(body, {delimiter: ';'}, function(error,data) {
 //               console.log(data);
                //var ubahnen = {};
                //bei 1 starten, weil 0 sind Spaltenbezeichnung
 //               for (let i = 1; i < data.length; i++) {
 //                   if(data[i][4] != 'ptMetro') continue;
 //                   haltestellen[data[i][1]] = data[i][0];
 //               }
 //               console.log(ubahnen);
 //               fs.writeFile('haltestellen.json', JSON.stringify(haltestellen), function () {
                    


//                    res.writeHead(200, {'Content-Type': 'application/json'});
//                   res.end('{"result": "sucess"}');
 //               });
//            });
//        } else {
//            res.code(404).end();
//        }
//    });
//});



// URL Request für Linien
app.post('/getWLSData', function (req, res) {
    //lade CSV von WL
    console.log('Bahnsteig-Daten von WL werden geladen.');
    request.get('https://data.wien.gv.at/csv/wienerlinien-ogd-steige.csv', function(err, response, body) {
        if(!err && response.statusCode == 200) {
            console.log(body);
            csv.parse(body, {delimiter: ';'}, function(error,data) {
                console.log(data);
                //var ubahnen = {};
                //bei 1 starten, weil 0 sind Spaltenbezeichnung
                for (let i = 1; i < data.length; i++) {
                    for (let j = 0; ubahnen.length; j++)
                    if(data[i][1] != ubahnen[j]) continue;
                    steige[data[i][0]] = data[i][0];
                }
                console.log(steige);
                fs.writeFile('steige.json', JSON.stringify(steige), function () {
                    


                    res.writeHead(200, {'Content-Type': 'application/json'});
                    res.end('{"steige-result": "sucess"}');
                });
            });
        } else {
            res.code(404).end();
        }
    });
});