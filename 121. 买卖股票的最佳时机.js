var log = console.log.bind(console)

/**
 * @param {number[]} prices
 * @return {number}
 * [7,1,5,3,6,4]
 * 输出: 5
 */
var getMaxNum = function (arr) {
    var result = arr[0]
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > result) {
            result = arr[i]
        }
    }
    return result
}

var maxProfit = function (prices) {
    if (prices.length === 0 || prices.length === 1) {
        return 0
    }
    var result = getMaxNum(prices.slice(1)) - prices[0]
    for (var i = 1; i < prices.length; i++) {
        if (getMaxNum(prices.slice(i + 1)) - prices[i] > result) {
            result = getMaxNum(prices.slice(i + 1)) - prices[i]
        }
    }
    if (result < 0) {
        // log("0")
        return 0
    } else {
        // log("result", result)
        return result
    }
};

maxProfit([])
maxProfit([7, 6, 4, 3, 1])