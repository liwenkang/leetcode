const log = console.log.bind(console)

// If there are n buckets and a pig drinking poison will die within m minutes, how many pigs (x) you need to figure out the "poison" bucket within p minutes? There is exact one bucket with poison.

// 相当于 num * num 个矩阵
var poorPigs = function (buckets, minutesToDie, minutesToTest) {
    if (buckets === 1) {
        return 0
    }
    var num = minutesToTest / minutesToDie + 1
    var result
    for (var i = 1; ; i++) {
        if (Math.pow(num, i) >= buckets) {
            result = i
            break
        }
    }
    return result
}

poorPigs(5, 15, 60)