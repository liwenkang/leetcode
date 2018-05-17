var log = console.log.bind(console)

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 * 输入: numbers = [2, 7, 11, 15], target = 9
 * 输出: [1,2]
 * 解释: 2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。
 */
var twoSum = function (numbers, target) {
    for (var i = 0; i < numbers.length; i++) {
        var index = numbers.indexOf(target - numbers[i], i + 1)
        if (index !== -1) {
            return [i + 1, index + 1]
        }
    }
};

twoSum([2, 7, 11, 15], 9)
