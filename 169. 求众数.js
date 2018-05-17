var log = console.log.bind(console)

/**
 * @param {number[]} nums
 * @return {number}
 * 众数是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。
 */
var getRepeatTime = function (num, arr) {
    var time = 0
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            time++
        }
    }
    return time
}

getRepeatTime(5, [1, 2, 3, 5, 6, 5, 5, 66, 6])

var majorityElement = function (nums) {
    var time = Math.floor(nums.length / 2)
    for (var i = 0; i < nums.length; i++) {
        if (getRepeatTime(nums[i], nums) > time) {
            log(nums[i])
            return nums[i]
        }
    }
};

majorityElement([2,2,1,1,1,2,2])