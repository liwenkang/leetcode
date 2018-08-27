const log = console.log.bind(console)

var threeSumClosest = function (nums, target) {
    // 双指针
    var closest = Infinity
    var result
    nums.sort((a, b) => a - b)
    for (var i = 0; i < nums.length; i++) {
        var j = i + 1
        var k = nums.length - 1

        var a = nums[i]
        var b = nums[j]
        var c = nums[k]

        while (j < k) {
            var sum = nums[i] + nums[j] + nums[k]

            if (sum < target) {
                // 有点小, 中间的值大一点
                if (Math.abs(sum - target) < closest) {
                    closest = Math.abs(sum - target)
                    result = sum
                }
                j++
            } else if (sum > target) {
                // 大了, 结尾的值小一点
                if (Math.abs(sum - target) < closest) {
                    closest = Math.abs(sum - target)
                    result = sum
                }
                k--
            } else {
                return sum
            }
        }
    }
    return result
}

log(threeSumClosest([-1, 2, 1, -4], 1))