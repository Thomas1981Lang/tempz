window.onload = function () { // um die function im oberen bereich zu starten, da sonst das script nicht ausgeführt werden könnte, weil er von oben nach unten die Seite abarbeitet
    
    document.getElementById('absatz').innerHTML = '<p id="neu">Hallo <span id="switch">Javascript</span></p>';

    document.getElementById('absatz').onclick = function () {
        
        
       

        document.getElementById( 'switch' ).classList.toggle("green") ;
        /* document.getElementById("absatz").id = "neu"; */
    }
}
   /*  document.getElementById('neu').onclick = function () {
        
        document.getElementById( 'switch' ).classList.toggle("green") ;

    } */
    
    

