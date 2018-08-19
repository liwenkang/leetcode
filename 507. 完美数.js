const log = console.log.bind(console)

/**
 * Input: 28
 Output: True
 Explanation: 28 = 1 + 2 + 4 + 7 + 14
 * @param {number} num
 * @return {boolean}
 */

var checkPerfectNumber = function (num) {
    if(num === 0) {
        return false
    }
    var divisorsArr = []
    for (var i = 1; i < num; i++) {
        if (num % i === 0) {
            divisorsArr.push(i)
        }
    }
    return divisorsArr.reduce((init, value) => init + value, 0) === num
}

log(checkPerfectNumber(28))