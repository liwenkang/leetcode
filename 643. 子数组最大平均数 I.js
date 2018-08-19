const log = console.log.bind(console)

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * [1,12,-5,-6,50,3], k = 4
 */
var averageArr = function (array) {
    return array.reduce((init, value) => init + value, 0)
}

var findMaxAverage = function (nums, k) {
    var average = averageArr(nums.slice(0, k))
    var maxAverage = average
    for (var i = 1; i <= nums.length - k; i++) {
        var arr = nums.slice(i, i + k)
        average = average - nums[i - 1] + nums[k + i - 1]
        if (average > maxAverage) {
            maxAverage = average
        }
    }
    return maxAverage / k
}

log(findMaxAverage([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2))