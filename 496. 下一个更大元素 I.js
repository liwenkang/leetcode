const log = console.log.bind(console)

/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 * 输入: nums1 = [4,1,2], nums2 = [1,3,4,2].
 * 输出: [-1,3,-1]
 * 解释:
 * 对于num1中的数字4，你无法在第二个数组中找到下一个更大的数字，因此输出 -1。
 * 对于num1中的数字1，第二个数组中数字1右边的下一个较大数字是 3。
 * 对于num1中的数字2，第二个数组中没有下一个更大的数字，因此输出 -1。
 */
var nextGreaterElement = function (findNums, nums) {
    var result = []
    for (var i = 0; i < findNums.length; i++) {
        var index = nums.indexOf(findNums[i])
        log("index", index)
        if (index + 1 >= nums.length) {
            result.push(-1)
        } else {
            var flag = true
            for (var j = index + 1; j < nums.length; j++) {
                if (nums[j] > findNums[i]) {
                    result.push(nums[j])
                    flag = false
                    break
                }
            }
            if (flag) {
                result.push(-1)
            }
        }
    }
    // log("result", result)
    return result
}

nextGreaterElement([4, 1, 2], [1, 2, 3, 4])
nextGreaterElement([4, 1, 2], [1, 3, 4, 2, 6])