var log = console.log.bind(console)

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
// 遍历,如果找不到一样的就输出,找到了就都删掉
    for (var i = 0; i < nums.length; i++) {
        var index = nums.indexOf((nums[i]), i + 1)
        if (index === -1) {
            log(nums[i])
            return nums[i]
        } else {
            // log(nums.slice(0, i))
            // log(nums.slice(i + 1, index))
            // log(nums.slice(index + 1))
            nums = nums.slice(0, i).concat(nums.slice(i + 1, index)).concat(nums.slice(index + 1))
            i--
            // log("nums", nums)
        }
    }
};

singleNumber([1, 2, 1, 2, 4])
// singleNumber([1, 0, 1])