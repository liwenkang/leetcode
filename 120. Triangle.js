var log = console.log.bind(console)

var minimumTotal = function (triangle) {
    let m = triangle.length//行数
    // 第i行有i列
    for (let i = 1; i < m; i++) {
        triangle[i][0] += triangle[i - 1][0]
        triangle[i][i] += triangle[i - 1][i - 1]
    }
    for (let i = 2; i < m; i++) {
        for (let j = 1; j < i; j++) {
            triangle[i][j] = Math.min(triangle[i - 1][j - 1], triangle[i - 1][j]) + triangle[i][j]
        }
    }
    log(Math.min(...triangle[m - 1]))
    return Math.min(triangle[m - 1])
}

minimumTotal([
    [2],
    [3, 4],
    [6, 5, 7],
    [4, 1, 8, 3]
])

function index(ary, target) {
    for (var i = 0; i < ary.length; i++) {
        if (ary[i] === target) {
            return i
        }
    }
    return -1
}

function includes(ary, target) {
    if (target !== target) {
        for (var i = 0; i < ary.length; i++) {
            if (ary[i] !== ary[i]) {
                return true
            }
        }
        return false
    } else {
        for (var i = 0; i < ary.length; i++) {
            if (ary[i] === target) {
                return true
            }
        }
        return false
    }
}