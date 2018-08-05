var getSum = function (arr, start, length) {
    // 给定 数组, 开始位置, 截取长度, 返回和
    var sum = 0
    for (var i = start; i < start + length; i++) {
        if (i > arr.length - 1) {
            break
        }
        sum += arr[i]
    }
    return sum
}

var minSubArrayLen = function (s, nums) {
    var minLength = Infinity
    for (var i = 0; i < nums.length; i++) {
        // i 就是 start 的位置
        var flag = false
        for (var j = 1; j <= nums.length - i; j++) {
            // j 就是长度
            if (getSum(nums, i, j) >= s) {
                flag = true
                if (j < minLength) {
                    minLength = j
                }
                break
            }
        }
        if (flag === false) {
            break
        }
    }
    if (minLength === Infinity) {
        return 0
    } else {
        return minLength
    }
}