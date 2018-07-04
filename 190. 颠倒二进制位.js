const log = console.log.bind(console)

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 * 输入: 43261596
 * 输出: 964176192
 * 解释: 43261596 的二进制表示形式为 00000010100101000001111010011100 ，
 * 返回 964176192，其二进制表示形式为 00111001011110000010100101000000 。
 */

var reverseBits = function (n) {
    var str = "00000000000000000000000000000000" + n.toString(2)
    var reverseStr = str.split("").reverse().slice(0, 32)
    var count = 0
    for (var i = 0; i < 32; i++) {
        count += (parseInt(reverseStr[i]) * Math.pow(2, reverseStr.length - 1 - i))
    }
    return count
}

reverseBits(43261596)