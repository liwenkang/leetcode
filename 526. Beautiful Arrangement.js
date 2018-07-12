var log = console.log.bind(console)

/**
 * 回溯算法
 * @param {number} N
 * @return {number}
 */
var countArrangement = function (N) {
    var visited = []
    // 因为在数组中, 数字N对应的位置是N-1, 所以需要+1对齐
    visited.length = N + 1
    visited.fill(false)

    var count = 0
    var judge = function (N, pos, visited) {
        // 数组内的每个数字的位置都要对
        // 位置对一次, pos 就 +1
        // 位置全对了,也就是pos > N, 才 +1
        if (pos === N + 1) {
            count++
        }
        for (var i = 1; i <= N; i++) {
            if (!visited[i] && (i % pos === 0 || pos % i === 0)) {
                visited[i] = true
                judge(N, pos + 1, visited)
                // 置为未 visited
                visited[i] = false
            }
        }
    }
    judge(N, 1, visited)
    log("count", count)
    return count
}

countArrangement(2)