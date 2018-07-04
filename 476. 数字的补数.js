const log = console.log.bind(console)

/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
    var str = num.toString(2)
    var result = ""
    for (var i = 0; i < str.length; i++) {
        if (str[i] === "0") {
            result += "1"
        } else {
            result += "0"
        }
    }
    return parseInt(result, 2)
}

findComplement(1)