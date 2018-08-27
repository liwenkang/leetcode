const log = console.log.bind(console)


var minCostClimbingStairs = function (cost) {

    for (let i = 2; i < cost.length; i++) {
        cost[i] += Math.min(cost[i - 1], cost[i - 2])
    }

    return Math.min(cost[cost.length - 1], cost[cost.length - 2])

}

log(minCostClimbingStairs([0, 0, 1, 0]))
log(minCostClimbingStairs([0, 0, 1, 1]))
log(minCostClimbingStairs([0, 1, 1]))
log(minCostClimbingStairs([1, 0, 0, 1]))