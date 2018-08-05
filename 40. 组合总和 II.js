const log = console.log.bind(console)

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

var deleteArr = function (arr) {
    var result = []
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].toString()
    }
    arr = Array.from(new Set(arr))
    for (var i = 0; i < arr.length; i++) {
        var str = arr[i].split(",")
        var a = []
        for (var j = 0; j < str.length; j++) {
            a.push(parseInt(str[j]))
        }
        result.push(a)
    }
    return result
}

var sumArr = function (arr) {
    var sum = 0
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}

var getRepeteNum = function (str, repeteStr) {
    var count = 0
    for (var i = 0; i < str.length; i++) {
        if (str[i] === repeteStr) {
            count++
        }
    }
    return count
}

var combinationSum2 = function (candidates, target) {
    // 首先先把能加的
    candidates.sort(function (a, b) {
        return a - b
    })

    var out = []

    if (candidates.length === 0) {
        return []
    } else {
        var result = []
        for (var i = 0; i < candidates.length; i++) {
            var sum = candidates[i]
            if (sum < target) {
                result.push([sum])
            } else if (sum === target) {
                // 直接加到 out 里
                out.push([sum])
            }
        }
    }

    var addOne = function (result, candidates) {
        var re = []
        var flag = false
        for (var i = 0; i < result.length; i++) {
            var lastStr = result[i][result[i].length - 1]
            var fistIndex = candidates.indexOf(lastStr)
            var lastIndex = candidates.lastIndexOf(lastStr)
            if (fistIndex === lastIndex) {
                // 只有一个
                var index = lastIndex + 1
            } else {
                // 有多个
                var index = fistIndex + getRepeteNum(result[i], lastStr)
            }
            for (var j = index; j < candidates.length; j++) {
                var sum = sumArr(result[i]) + candidates[j]
                if (sum < target) {
                    re.push(result[i].concat(candidates[j]))
                } else if (sum === target) {
                    out.push(result[i].concat(candidates[j]))
                    break
                    flag = true
                } else {
                    break
                    flag = true
                }
            }
            if (flag) {
                break
            }
        }
        if (re.length > 0) {
            re = deleteArr(re)
            addOne(re, candidates)
        } else {
            return
        }
    }
    addOne(result, candidates)
    return deleteArr(out)
}

//
// combinationSum2([10, 1, 2, 7, 6, 1, 5], 8)
// combinationSum2([2, 5, 2, 1, 2], 5)
combinationSum2([4, 4, 2, 1, 4, 2, 2, 1, 3], 6)