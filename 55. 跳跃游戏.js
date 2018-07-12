const log = console.log.bind(console)

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    // 1 之前有没有
    var result = []
    for (var i = 0; i < nums.length - 1; i++) {
        if (nums[i] === 0) {
            result.push(i)
        }
    }

    log(result)
    if (result.length > 0) {
        var count = 0
        for (var j = 0; j < result[0]; j++) {
            if (nums[j] !== result[0] - j) {
                count++
                break
            }
        }

        for (var i = 1; i < result.length; i++) {
            // 如果有多个
            for (var j = result[i - 1] + 1; j < result[i]; j++) {
                if (nums[j] !== result[i] - j) {
                    // 可以
                    count++
                    break
                }
            }
        }

        if (count === result.length) {
            return true
        } else {
            log("这里出错")
            log("count",count)
            log("result",result)
            return false
        }
    } else {
        return true
    }
}

log(canJump([3, 0, 0, 0]))