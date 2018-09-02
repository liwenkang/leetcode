const log = console.log.bind(console)

var rob = function (nums) {
    if(nums.length === 1) {
        return nums[0]
    }
    if(nums.length === 2) {
        return Math.max(...nums)
    }
    var helper = function (nums) {
        var x = 0
        var y = 0
        for (var i = 0; i < nums.length; i++) {
            if (i % 2 === 0) {
                // 奇数位置
                x = Math.max(x + nums[i], y)
            } else {
                // 偶数位置
                y = Math.max(y + nums[i], x)
            }
        }
        return [x, y]
    }
    var a = Math.min(...helper(nums))
    var b = Math.max(...helper(nums.slice(1)))
    return Math.max(a, b)
};

log(rob([2, 1, 1, 2])) //3

log(rob([1, 2, 3, 1])) //4

log(rob([2, 3, 2])) //3

log(rob([1, 2, 1, 1])) //3
// log(rob())

// 1 1211 1