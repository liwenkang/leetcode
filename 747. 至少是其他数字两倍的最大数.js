const log = console.log.bind(console)

/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
    var maxNum = Math.max(...nums)
    var flag = true
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] !== maxNum) {
            if (maxNum < 2 * nums[i]) {
                flag = false
                log(-1)
                return -1
            }
        }
    }
    if (flag) {
        log(nums.indexOf(maxNum))
        return nums.indexOf(maxNum)
    }
}

dominantIndex([3, 6, 1, 0])
dominantIndex([1, 2, 3, 4])