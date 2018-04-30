$.fn.colorNumber = function () {
    var numbers = /[0-9]/g;
    
console.log(match([0-9]));
    if (this.match(numbers) ) {

        this.css({
            color: 'red',
            'font-weight': 'bold'
        });

        
    }
    return this;
}


