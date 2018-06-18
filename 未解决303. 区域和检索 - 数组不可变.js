var log = console.log.bind(console)

/**
 * @param {number[]} nums
 * 没搞懂它的意思
 */

var sumRange = function (arr) {
    var result = 0
    for (var i = 0; i < arr.length; i++) {
        result += arr[i]
    }
    return result
}

var NumArray = function (nums, i, j) {
    var arr = nums.slice(i, j + 1)
    return sumRange(arr)
}

func([-2, 0, 3, -5, 2, -1], 2, 3)