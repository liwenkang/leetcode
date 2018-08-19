const log = console.log.bind(console)

function back(n, k, result = [], item, start = 1) {
    if (item.length === k) {
        result.push(item.slice())
    } else {
        for (var i = start; i <= n; i++) {
            item.push(i)
            back(n, k, result, item, i + 1)
            item.pop()
        }
    }
}

var combine = function (n, k) {
    // k 个 1~n 的数字 全排列
    var result = []
    back(n, k, result, [])
    return result
}

log(combine(4, 2))