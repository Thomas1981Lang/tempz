var addieren = function (a, b) {
    var summe;
    if (typeof a == 'string') {
        a = a.replace(',', '.');
    }

    if (typeof b == 'string') {
        b = b.replace(',', '.');
    }

    if (a === '' && b === '') {
        summe = 0;
        return summe;
    }
    if (isNaN(summe)) {
        summe = a + b;
        return summe;
    }
    
    summe = a * 1 + b * 1;
    return summe;
}