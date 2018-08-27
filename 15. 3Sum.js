const log = console.log.bind(console)
/*
* Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
*/

var threeSum = function (nums) {
    // 双指针
    var result = []
    nums.sort((a, b) => a - b)
    for (var i = 0; i < nums.length; i++) {
        var j = i + 1
        var k = nums.length - 1

        var a = nums[i]
        var b = nums[j]
        var c = nums[k]

        if (a > 0) {
            return result
        }

        if (nums[i] === nums[i - 1]) {
            continue
        }

        while (j < k) {
            var sum = nums[i] + nums[j] + nums[k]
            if (sum < 0) {
                // 有点小, 中间的值大一点
                j++
            } else if (sum > 0) {
                // 大了, 结尾的值小一点
                k--
            } else {
                result.push([nums[i], nums[j], nums[k]])
                while (nums[k] === nums[k - 1]) {
                    k--
                }
                while (nums[j] === nums[j + 1]) {
                    j++
                }
                j++
                k--
            }
        }
    }
    return result
};