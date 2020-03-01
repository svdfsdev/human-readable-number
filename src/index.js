module.exports = function toReadable (number) {
    
    let arr0till9 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let arr10till19 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let arrDecades = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    let wordNumber = "";

    if (number > 99) {
        wordNumber = arr0till9[ Math.floor( number / 100) ] + ' hundred ';
    }

    if ( (number % 100) > 9 && (number % 100) < 20 ) {
        return wordNumber = wordNumber + arr10till19[ Math.floor( number % 10 ) ];
    } else if ( Math.floor(number % 100 / 10) != 0) {
        wordNumber = wordNumber + arrDecades[ Math.floor(number % 100 / 10) - 2 ] + ' ';
    }

    if (number % 10 > 0 && number > 20) {
        wordNumber = wordNumber + arr0till9[number % 10];
    } else if (number < 10) {
        wordNumber = arr0till9[number];
    }

    return wordNumber.trim();
}