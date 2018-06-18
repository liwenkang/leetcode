var log = console.log.bind(console)
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    var arr = nums.sort(function (a, b) {
        return a - b
    })
    if (arr.length === 1) {
        if (arr[0] === 0) {
            log("1")
            return 1
        }
        if (arr[0] === 1) {
            log("0")
            return 0
        }
    }
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== i) {
            log("i", i)
            return i
        }
    }
    log("arr[arr.length - 1] + 1", arr[arr.length - 1] + 1)
    return arr[arr.length - 1] + 1
}

missingNumber([ 6, 4, 2, 3, 5, 7, 0, 1])