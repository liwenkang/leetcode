var log = console.log.bind(console)

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 必须在原数组上操作，不能拷贝额外的数组。
 * 尽量减少操作次数。
 */
var moveZeroes = function (nums) {
    var count = 0
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            nums.splice(i,1)
            count++
            i = -1
        }
    }
    for(var j = 0; j < count; j++) {
        nums.push(0)
    }
}

moveZeroes([0,0,1])