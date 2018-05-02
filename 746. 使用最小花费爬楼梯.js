var log = console.log.bind(console)
/**
 * @param {number[]} cost
 * @return {number}
 * 计算的结果是跳出去为止最小的花费
 */
var minCostClimbingStairs = function (cost) {
    // 0. 最大的情况是全部加起来
    var maxCost = getMaxCost(cost)

    // 分类讨论
    // 1. 启示位置是 【0】

    // 1.1 隔一个加一个
    var start0 = 0
    for (var i = 0; i < cost.length; i += 2) {
        start0 += cost[i]
    }

    // 1.2 乱序

    // 2. 启示位置是 【1】
    var start1 = 0
    for (var i = 1; i < cost.length; i += 2) {
        start1 += cost[i]
    }

    if (start0 < start1) {
        if (start0 < maxCost) {
            maxCost = start0
        }
    } else {
        if (start1 < maxCost) {
            maxCost = start1
        }
    }
    log(maxCost)
}

var getMaxCost = function (cost) {
    var maxCost = 0
    // 分类讨论
    // 首先是一个一个跳过去，这是最大的
    for (var i = 0; i < cost.length; i++) {
        maxCost += cost[i]
    }
    return maxCost
}

minCostClimbingStairs([1, 1, 1, 2, 1, 2, 1])
