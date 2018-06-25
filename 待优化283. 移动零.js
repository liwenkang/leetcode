var log = console.log.bind(console)

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var moveZeroes = function (nums) {
    var zeroLength = 0
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            nums = nums.slice(0, i).concat(nums.slice(i + 1))
            i--
            zeroLength++
        }
    }
    for (var j = 0; j < zeroLength; j++) {
        nums.push(0)
    }
    log(nums)
}

moveZeroes([0, 1, 0, 3, 12, 0])