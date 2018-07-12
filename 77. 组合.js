const log = console.log.bind(console)

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    // 标准的解法
    // k = 2
    if (k > 1) {
        var result = [[]]
        for (var i = 1; i <= n; i++) {
            result.push([i])
        }
        var flag = true
        var out = []
        var addOne = function (result) {
            // log("result", result)
            var addArr = [[]]
            for (var i = 1; i < result.length; i++) {
                for (var j = result[i][result[i].length - 1] + 1; j <= n; j++) {
                    var temp = result[i].slice(0)
                    temp = temp.concat(j)
                    if (temp.length === k) {
                        flag = false
                        out.push(temp)
                    }
                    addArr.push(temp)
                }
            }
            if (flag) {
                addOne(addArr)
            } else {
                return out
            }
        }
        addOne(result)
        return out
    } else {
        var result = []
        for (var i = 1; i <= n; i++) {
            result.push([i])
        }
        return result
    }
}

combine(1, 1)

//
// [[1, 2, 3, 4],
// [1, 2, 3, 5],
// [1, 2, 3, 6],
// [1, 2, 4, 5],
// [1, 2, 4, 6],
// [1, 2, 5, 6],
// [1, 3, 4, 5],
// [1, 3, 4, 6],
// [1, 3, 5, 6],
// [1, 4, 5, 6],
// [2, 3, 4, 5],
// [2, 3, 4, 6],
// [2, 3, 5, 6],
// [2, 4, 5, 6],
// [3, 4, 5, 6]]
