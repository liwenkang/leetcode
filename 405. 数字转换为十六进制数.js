const log = console.log.bind(console)

var toBinary = function (num) {
    var binary = num.toString(2)
    return binary
}

/**
 * @param {number} num
 * @return {string}
 */
var dict = {
    "1": 1,
    "10": 2,
    "11": 3,
    "100": 4,
    "101": 5,
    "110": 6,
    "111": 7,

    "0000": 0,
    "0001": 1,
    "0010": 2,
    "0011": 3,
    "0100": 4,
    "0101": 5,
    "0110": 6,
    "0111": 7,
    "1000": 8,
    "1001": 9,
    "1010": "a",
    "1011": "b",
    "1100": "c",
    "1101": "d",
    "1110": "e",
    "1111": "f",
}

var toHex = function (num) {
    if (num < 0) {
        num = 4294967296 + num
    }
    if(num === 0) {
        return "0"
    }
    var arr = toBinary(num).split("")
    var result = []
    while (arr.length > 0) {
        result.push(arr.slice(-4).join(""))
        arr.splice(-4, 4)
    }
    result = result.reverse()
    for (var i = 0; i < result.length; i++) {
        result[i] = dict[result[i]]
    }
    log(result.join(""))
    return result.join("")
}

toHex(1)
toHex(0)
toHex(-1)