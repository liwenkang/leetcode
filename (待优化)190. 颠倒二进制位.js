var log = console.log.bind(console)

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 * 输入: 43261596
 * 输出: 964176192
 * 解释: 43261596 的二进制表示形式为 00000010100101000001111010011100 ，
 * 返回 964176192，其二进制表示形式为 00111001011110000010100101000000 。
 */

var binaryToDecimal = function (arr) {
    var sum = 0
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === "1") {
            var num = Math.pow(2, arr.length - 1 - i)
            sum += num
        }
    }
    return sum
}


var addZero = function (str) {
    var zeroNum = 32 - str.length
    for (var i = 0; i < zeroNum; i++) {
        str = "0" + str
    }
    return str
}

// addZero("10100101000001111010011100")

var reverseBits = function (n) {
    var arr = n.toString(2)
    var result = addZero(arr).split("").reverse()
    result = binaryToDecimal(result)
    // log(result)
};

reverseBits(43261596)