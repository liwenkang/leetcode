const log = console.log.bind(console)

var findCheapestPrice = function (n, flights, src, dst, K) {
    // 先找到有多少条航线可以从 src 到达 dst

    // 这是一次 K
    var couldGo = []
    var start = []
    var nextFlight = []
    for (var i = 0; i < flights.length; i++) {
        var flight = flights[i]
        if (flight[0] === src) {
            start.push(flight)
            if (flight[1] === dst) {
                couldGo.push(flight)
                start.pop()
            }
        } else {
            nextFlight.push(flight)
        }
    }
}

// findCheapestPrice(3, [[0, 1, 100], [1, 2, 100], [0, 2, 500]], 0, 2, 1)
// findCheapestPrice(3, [[0, 1, 100], [1, 2, 100], [0, 2, 500]], 0, 2, 0)
findCheapestPrice(5, [[1, 2, 10], [2, 0, 7], [1, 3, 8], [4, 0, 10], [3, 4, 2], [4, 2, 10], [0, 3, 3], [3, 1, 6], [2, 4, 5]], 0, 4, 1)
// findCheapestPrice(10, [[3, 4, 4], [2, 5, 6], [4, 7, 10], [9, 6, 5], [7, 4, 4], [6, 2, 10], [6, 8, 6], [7, 9, 4], [1, 5, 4], [1, 0, 4], [9, 7, 3], [7, 0, 5], [6, 5, 8], [1, 7, 6], [4, 0, 9], [5, 9, 1], [8, 7, 3], [1, 2, 6], [4, 1, 5], [5, 2, 4], [1, 9, 1], [7, 8, 10], [0, 4, 2], [7, 2, 8]], 6, 0, 7,)