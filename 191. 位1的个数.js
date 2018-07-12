var log = console.log.bind(console)
/**
 * @param {number} n - a positive integer
 * @return {number}
 */

var hammingWeight = function (n) {
    var str = n.toString(2)
    var sum = 0
    for (var i = 0; i < str.length; i++) {
        if (str[i] === "1") {
            sum++
        }
    }
    return sum
}

hammingWeight(128)