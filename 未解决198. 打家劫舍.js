var log = console.log.bind(console)
/**
 * @param {number[]} nums
 * @return {number}
 * 输入: [2,7,9,3,1]
 * 输出: 12
 * 解释: 偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
 * 偷窃到的最高金额 = 2 + 9 + 1 = 12 。
 * 不能连着拿，只能隔着拿
 *
 * 假设数组有 x 个元素,共有多少种取法？
 *
 */

var rob = function (nums) {
    var iniSum = 0
    for (var i = 0; i < nums.length; i += 2) {
        iniSum += nums[i]
    }
    log(iniSum)
   /* 如果我现在隔1 隔2 随机着拿 */
}

rob([2, 7, 9, 6, 1])
rob([1, 2, 3, 1])