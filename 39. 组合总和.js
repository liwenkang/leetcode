const log = console.log.bind(console)

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 * 输入: candidates = [2,3,5], target = 8,
 * 所求解集为:
 * [
 *     [2,2,2,2],
 *     [2,3,3],
 *     [3,5]
 * ]
 */

var combinationSum = function (candidates, target) {
    var result = []
    var temp = []
    var find = function (target, temp, index) {
        for (var i = 0; i <= index; i++) {
            if (candidates[i] > target) {
                continue
            } else if (candidates[i] === target) {
                result.push(temp.concat(candidates[i]))
            } else {
                find(target - candidates[i], temp.concat(candidates[i]), i)
            }
        }
    }
    find(target, temp, candidates.length - 1)
    return result
}

combinationSum([3, 5], 8)