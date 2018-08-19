const log = console.log.bind(console)

function judgeArray(array, insertArray) {
    var str = insertArray.join(",")
    var tmpArray = []
    for (var i = 0; i < array.length; i++) {
        tmpArray.push(array[i].slice().toString())
    }
    return tmpArray.includes(str)
}

function backtrack(candidates, index, target, subset, list) {
    if (target === 0) {
        if (!judgeArray(list, subset)) {
            list.push(subset.slice())
            return
        } else {
            return
        }
    }
    if (target <= 0 || candidates[index] > target) {
        return
    }
    for (var i = index; i < candidates.length; i++) {
        // 核心点,就是每个 点 开始,深入,直到 有答案/没答案 结束
        subset.push(candidates[i])
        backtrack(candidates, i + 1, target - candidates[i], subset, list)
        subset.pop()
    }
}

var combinationSum2 = function (candidates, target) {
    const list = []
    candidates.sort(function (a, b) {
        return a - b
    })
    backtrack(candidates, 0, target, [], list)
    return list
}

log(combinationSum2([2, 5, 2, 1, 2], 5))