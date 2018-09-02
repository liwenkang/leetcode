const log = console.log.bind(console)

var minSubArrayLen = function (s, nums) {
    var min = Infinity
    for (var i = 0; i < nums.length; i++) {
        var count = nums[i]
        if (count < s) {
            var start = i
            for (var j = i + 1; j < nums.length; j++) {
                count += nums[j]
                if (count >= s) {
                    if (j - start + 1 < min) {
                        min = j - start + 1
                    }
                }
            }
        } else {
            return 1
        }
    }
    if (min === Infinity) {
        return 0
    } else {
        return min
    }
}

minSubArrayLen(7, [2, 3, 1, 2, 4, 3])