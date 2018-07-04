const log = console.log.bind(console)

/**
 * @param {number[]} nums
 * @return {number}
 */
var isLHS = function (arr) {
    var minNum = Math.min(...arr)
    var maxNum = Math.max(...arr)
    return maxNum - minNum === 1
}

var findLHS = function (nums) {
    var output = []
    for (var i = 0; i < nums.length; i++) {
        var result1 = [nums[i]]
        var result2 = [nums[i]]
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[j] - nums[i] <= 1 && nums[j] - nums[i] >= 0) {
                result1.push(nums[j])
            }
            if (nums[i] - nums[j] <= 1 && nums[i] - nums[j] >= 0) {
                result2.push(nums[j])
            }
        }
        output.push(result1)
        output.push(result2)
    }

    var maxLength = 0
    for (var i = 0; i < output.length; i++) {
        if (isLHS(output[i])) {
            if (output[i].length > maxLength) {
                maxLength = output[i].length
            }
        }
    }
    return maxLength
}

findLHS([1, 3, 2, 2, 5, 2, 3, 7])