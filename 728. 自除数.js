const log = console.log.bind(console)
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
    var result = []
    for (var i = left; i <= right; i++) {
        var str = i.toString().split("")
        var flag = true
        for (var j = 0; j < str.length; j++) {
            if (i % parseInt(str[j]) !== 0) {
                flag = false
            }
        }
        if (flag) {
            result.push(i)
        }
    }
    return result
}
selfDividingNumbers(1, 22)
