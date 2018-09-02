const log = console.log.bind(console)
/*
* Input:
gas  = [1,2,3,4,5]
cost = [3,4,5,1,2]

Output: 3

Explanation:
Start at station 3 (index 3) and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
Travel to station 4. Your tank = 4 - 1 + 5 = 8
Travel to station 0. Your tank = 8 - 2 + 1 = 7
Travel to station 1. Your tank = 7 - 3 + 2 = 6
Travel to station 2. Your tank = 6 - 4 + 3 = 5
Travel to station 3. The cost is 5. Your gas is just enough to travel back to station 3.
Therefore, return 3 as the starting index.
*/
var canCompleteCircuit = function (gas, cost) {
    var startIndex = []
    for (var i = 0; i < gas.length; i++) {
        if (gas[i] >= cost[i]) {
            startIndex.push(i)
        }
    }
    // log("startIndex", startIndex)
    for (var i = 0; i < startIndex.length; i++) {
        // startIndex(i)
        var start = startIndex[i]
        var now = 0
        for (var j = 0; j < gas.length; j++) {
            var nowIndex = start + j
            if (nowIndex >= gas.length) {
                nowIndex = nowIndex - gas.length
            }
            now += gas[nowIndex]
            now -= cost[nowIndex]
            if (j === gas.length - 1 && now >= 0) {
                return start
            }
            if (now < 0) {
                break
            }
        }
    }
    return -1
}

log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]))
log(canCompleteCircuit([2, 3, 4], [3, 4, 3]))
log(canCompleteCircuit([5, 1, 2, 3, 4], [4, 4, 1, 5, 1]))
log(canCompleteCircuit([3, 1, 1], [1, 2, 2]))