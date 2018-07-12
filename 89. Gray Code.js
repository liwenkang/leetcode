const log = console.log.bind(console)

var binaryToGray = function (binary) {
    return ((binary >> 1) ^ (binary))
}

var grayCode = function (n) {
    var result = []
    for (var i = 0; i < Math.pow(2, n); i++) {
        result.push(binaryToGray(i))
    }
    return result
}

grayCode(0)
grayCode(2)
grayCode(3)
