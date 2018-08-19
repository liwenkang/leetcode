const log = console.log.bind(console)

/*
* Input: candidates = [2,3,5], target = 8,
* A solution set is:
* [
*   [2,2,2,2],
*   [2,3,3],
*   [3,5]
* ]
*/
function backtrack(candidates, index, target, subset, list) {
    if (target === 0) {
        list.push(subset.slice())
        return
    }
    if (target <= 0 || candidates[index] > target) {
        return
    }
    for (var i = index; i < candidates.length; i++) {
        // 核心点,就是每个 点 开始,深入,直到 有答案/没答案 结束
        subset.push(candidates[i])
        backtrack(candidates, i, target - candidates[i], subset, list)
        subset.pop()
    }
}

var combinationSum = function (candidates, target) {
    const list = []
    candidates.sort(function (a, b) {
        return a - b
    })
    backtrack(candidates, 0, target, [], list)
    return list
}

log(combinationSum([2, 3, 5], 8))