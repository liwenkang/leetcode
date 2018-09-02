const log = console.log.bind(console)
/*
* Example 1:

Input:  [0,1,2,4,5,7]
Output: ["0->2","4->5","7"]
Explanation: 0,1,2 form a continuous range; 4,5 form a continuous range.
Example 2:

Input:  [0,2,3,4,6,8,9]
Output: ["0","2->4","6","8->9"]
Explanation: 2,3,4 form a continuous range; 8,9 form a continuous range.
*/
var summaryRanges = function (nums) {
    var result = []
    for (var i = 0; i < nums.length; i++) {
        var flag = false
        var count = 0
        var str = nums[i]
        var range = nums[i] + ""
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[j] - str === j - i) {
                flag = true
                count++
            } else {
                break
            }
        }
        if (flag) {
            range += "->" + nums[j - 1]
            nums.splice(i + 1, count)
        }
        result.push(range)
    }
    return result
}

summaryRanges([0, 1, 2, 4, 5, 7])
summaryRanges([0,2,3,4,6,8,9])