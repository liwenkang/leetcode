const log = console.log.bind(console)
/**
 * @param {number[]} nums
 * @return {number}
 */

var sortArr = function (arr) {
    arr.sort(function (a, b) {
        return a - b
    })
    return arr
}

var findUnsortedSubarray = function (nums) {
    var baseArr = nums.slice(0)
    var newArr = sortArr(nums)
    var start = 0
    var end = 0
    for (var i = 0; i < baseArr.length; i++) {
        if (baseArr[i] !== newArr[i]) {
            // 不一样
            start = i
            break
        }
    }

    for (var i = baseArr.length - 1; i >= 0; i--) {
        if (baseArr[i] !== newArr[i]) {
            // 不一样
            end = i
            break
        }
    }
    if(start === 0 && end === 0) {
        return 0
    }
    return end - start + 1
}

findUnsortedSubarray([1, 2, 3, 4])