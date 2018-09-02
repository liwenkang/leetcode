const log = console.log.bind(console)
/*
* Example 1:

Input: [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
Example 2:

Input: [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
*/
var maxSubArray = function (nums) {
    // 乘积最大的
    // 1. 首先把乘积为正的部分全部乘起来
    var max = -Infinity
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] * nums[j] > 0) {
                nums[i] = nums[i] * nums[j]
                nums.splice(j, 1)
                j--
            } else {
                break
            }
        }
    }
}

log(maxSubArray([2, 3, -2, 4]))
log(maxSubArray([-2, 0, -1]))