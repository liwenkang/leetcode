const log = console.log.bind(console)


var combinationSum3 = function (k, n) {
    function helper(start, res, set, k, n) {
        if (set.size === k && n === 0) {
            // k 的大小不变,但是 n 的大小变换
            res.push(Array.from(set))
        } else {
            for (var i = start; i <= 9; i++) {
                set.add(i)
                log("set",set)
                helper(i + 1, res, set, k, n - i)
                set.delete(i)
            }
        }
    }

    let res = []
    helper(1, res, new Set(), k, n)
    return res
}

log(combinationSum3(3, 7))