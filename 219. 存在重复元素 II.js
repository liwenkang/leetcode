var log = console.log.bind(console)

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 * 给定一个整数数组和一个整数 k，判断数组中是否存在两个不同的索引 i 和 j，使得 nums [i] = nums [j]，并且 i 和 j 的差的绝对值最大为 k。
 * 输入: nums = [1,2,3,1,2,3], k = 2
 * 输出: false
 */
var containsNearbyDuplicate = function (nums, k) {
    /* 判断是否存在两个不同的索引,使得 nums [i] = nums [j] */
    // 也就是说,判断是否有两个相同的值
    for (var i = 0; i < nums.length - 1; i++) {
        for (var j = nums.length - 1; j >= i + 1; j--) {
            if (nums[i] === nums[j]) {
                var diff = j - i
                if (diff <= k) {
                    // log("true")
                    return true
                }
            }
        }
    }
    // log("false")
    return false
}

containsNearbyDuplicate([99, 99], 2)