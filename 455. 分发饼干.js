const log = console.log.bind(console)

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var ascendingArr = function (arr) {
    arr.sort(function (a, b) {
        return a - b
    })
    return arr
}

var findContentChildren = function (g, s) {
    g = ascendingArr(g)
    s = ascendingArr(s)
    var count = 0
    for (var i = 0; i < s.length; i++) {
        for (var j = 0; j < g.length; j++) {
            // 如果有 >= 的就删掉
            if (s[i] >= g[j]) {
                // s 删掉
                // g 删掉
                s = s.slice(0, i).concat(s.slice(i + 1))
                g = g.slice(0, j).concat(g.slice(j + 1))
                count++
                i--
                break
            }
        }
    }
    log(count)
    return count
}