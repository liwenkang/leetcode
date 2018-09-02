const log = console.log.bind(console)

var numTrees = function (n) {
    var ans = 1
    for (var i = n + 1; i <= 2 * n; i++) {
        ans = ans * i / (i - n)
    }
    return ans / (n + 1)
}