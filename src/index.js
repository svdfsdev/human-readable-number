module.exports = function toReadable(number) {
    let units = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
    };

    let secondDozen = {
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
    };

    let dozens = {
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety",
    };

    let wordNumber = '';
    let countHundred = parseInt(number / 100);
    let countDozen = parseInt((number % 100 / 10));
    let countUnit = parseInt(number % 10);

    wordNumber += countHundred ? units[countHundred] + ' hundred' : '';
    wordNumber += countDozen ? ' ' + (dozens[countDozen] || secondDozen[number % 100]) : '';
    wordNumber += (countDozen !== 1 && number % 10 !== 0) || number < 9 ? ' ' + units[countUnit] : '';

    return wordNumber.trim();
}
