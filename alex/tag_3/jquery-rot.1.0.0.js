/**
 * 
 * jQuery rot
 * 2018, Wifi Wien 
 * 
 */


 $.fn.rot = function() {

     this.css({color:'red'});


     // return this.css({color:'red'}); wäre das gleiche wie unten
     return this; // wird benötigt um transparente methode zu werden
 }