const log = console.log.bind(console)

var fractionToDecimal = function (numerator, denominator) {
    var num = numerator / denominator
    log(num * denominator)
}

fractionToDecimal(1, 3)
fractionToDecimal(1, 3)
fractionToDecimal(2, 3)
fractionToDecimal(4, 9)
fractionToDecimal(4, 333)
fractionToDecimal(1, 333)