/**
 * 
 * @param {float} r 
 */
var umfang = function (r) {
    var r, u;
    u = 2 * r * Math.PI;
    return u;
}

var el = function (id) {
    return document.getElementById(id);
}

var runden = function (zahl, stellen) {
    var gerundet, stellen, nuller;
    nuller = 1;
    for (i = 1; i <= stellen; i++) {
        nuller += '0';
        console.log(nuller)
    }
    nuller = nuller * 1;
    console.log(nuller);
    gerundet = Math.round(zahl * nuller) / nuller;
    console.log(nuller);
    console.log(gerundet);
    return gerundet;
}