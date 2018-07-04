const log = console.log.bind(console)

/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
    nums.sort(function (a, b) {
        return a - b
    })
    var count = 0
    for (var i = 0; i < nums.length; i += 2) {
        count += nums[i]
    }
    return count
}

arrayPairSum([1, 4, 3, 2])