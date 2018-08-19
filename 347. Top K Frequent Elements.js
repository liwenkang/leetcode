const log = console.log.bind(console)

var topKFrequent = function (nums, k) {
    var dict = {}
    nums.forEach(value => {
        if (dict[value] === undefined) {
            dict[value] = 1
        } else {
            dict[value]++
        }
    })
    var result = []
    for (var key in dict) {
        result.push([key, dict[key]])
    }
    result.sort((a, b) => b[1] - a[1])
    var out = []
    for (var i = 0; i < k; i++) {
        out.push(parseInt(result[i][0]))
    }
    return out
}

topKFrequent([4, 1, -1, 2, -1, 2, 3], 2)