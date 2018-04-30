window.onload = function () { // um die function im oberen bereich zu starten, da sonst das script nicht ausgeführt werden könnte, weil er von oben nach unten die Seite abarbeitet

    /* document.getElementById('absatz').onclick = function () {

        document.getElementById('absatz').innerHTML = '<p id="absatz">Hallo <span id="switch">Javascript</span>';

        document.getElementById( 'switch' ).classList.toggle("green") ;

    }
     */
    // window.onload

    document.getElementById('absatz').onclick = function () {
        document.getElementById("absatz").classList.toggle("green"); 

    }
}