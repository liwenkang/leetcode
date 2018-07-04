const log = console.log.bind(console)
/**
 * @param {number} num
 * @return {string}
 */
var toBinary = function (num) {
    return num.toString(16)
}

var toHex = function (num) {
    var x = toBinary(num)
    log(x)
}

toHex(-1)
