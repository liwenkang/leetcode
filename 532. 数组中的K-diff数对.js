const log = console.log.bind(console)

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
    var result = []
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            var diff = Math.abs(nums[i] - nums[j])
            if (diff === k) {
                if (nums[i] < nums[j]) {
                    result.push([nums[i], nums[j]])
                } else {
                    result.push([nums[j], nums[i]])
                }
            }
        }
    }
    // log(result)
    for (var i = 0; i < result.length; i++) {
        for (var j = i + 1; j < result.length; j++) {
            if (result[i][0] === result[j][0] && result[i][1] === result[j][1]) {
                // 删掉一个
                result.splice(j, 1)
                j--
            }
        }
    }
    return result.length
}

findPairs([3, 1, 4, 1, 5], 2)
findPairs([1, 2, 3, 4, 5], 1)
findPairs([1, 3, 1, 5, 4], 0)
findPairs([1, 1, 1, 2, 1], 1)