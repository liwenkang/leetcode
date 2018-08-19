const log = console.log.bind(console)

var rob = function (nums) {
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
    return Math.max(x, y)
}

/*
* Example 1:

Input: [1,2,3,1]

Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
             Total amount you can rob = 1 + 3 = 4.
Example 2:

Input: [0,2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
             Total amount you can rob = 2 + 9 + 1 = 12.
 */

log(rob([1, 2, 3, 1]))
log(rob([2, 7, 9, 3, 1]))