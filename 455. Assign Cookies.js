const log = console.log.bind(console)

var findContentChildren = function (g, s) {
    g.sort((a, b) => a - b)
    s.sort((a, b) => a - b)
    var count = 0
    for (var i = 0; i < g.length; i++) {
        for (var j = 0; j < s.length; j++) {
            if (s[j] >= g[i]) {
                g.splice(i, 1)
                s.splice(j, 1)
                i--
                count++
                break
            }
        }
    }

    return count
}

findContentChildren([1, 2, 3], [1, 1])

findContentChildren([1, 2], [1, 2, 3])