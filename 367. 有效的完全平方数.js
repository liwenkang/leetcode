var log = console.log.bind(console)

/**
 * @param {number} num
 * @return {boolean}
 */
var isSquare = function (num, x) {
    /* 如果 x*x = num 返回 true */
    if (x * x < num) {
        /* 向后 */
        return "backward"
    } else if (x * x > num) {
        /* 向前 */
        return "forward"
    } else {
        return "true"
    }
}

var isPerfectSquare = function (num) {
    if (num === 1) {
        return true
    }
    var midNum = parseInt((1 + num) / 2)

    var arr = [1, midNum, num]

    while (arr[2] - arr[0] !== 1) {
        if (isSquare(num, arr[1]) === "forward") {
            /* true 向前追溯 */
            arr = [arr[0], parseInt((arr[0] + midNum) / 2), midNum]
            midNum = parseInt((arr[0] + midNum) / 2)
        } else if (isSquare(num, arr[1]) === "backward") {
            /* false 向后追溯 */
            arr = [midNum, parseInt((midNum + arr[2]) / 2), arr[2]]
            midNum = parseInt((midNum + arr[2]) / 2)
        } else if (isSquare(num, arr[1]) === "true"){
            return true
        }
    }

    if (isSquare(num, arr[0]) === "true") {
        return true
    }

    if (isSquare(num, arr[2]) === "true") {
        return true
    }

    return false
}

isPerfectSquare(16)