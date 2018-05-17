var log = console.log.bind(console)

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    var arr = []
    for (var i = 0; i < prices.length - 1; i++) {
        if (prices[i + 1] - prices[i] > 0) {
            var item = [i, i + 1, prices[i + 1] - prices[i]]
            arr.push(item)
        }
    }
    // log(arr)
    if(arr.length === 0) {
        // log("0")
        return 0
    }
    var sum = 0
    var flag = 0
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1][0] >= arr[i][1]) {
            sum += arr[i + 1][2]
        }
    }
    // log(sum + arr[0][2])
    return sum + arr[0][2]
};

// maxProfit([7, 1, 5, 3, 6, 4])
// maxProfit([1,2,3,4,5])
maxProfit([2,1,2,1,0,1,2,3])