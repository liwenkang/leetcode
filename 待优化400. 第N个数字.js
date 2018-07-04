var log = console.log.bind(console)

/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function (n) {
    var str = []
    var i = 1
    while (i <= n) {
        str.push(i)
        i++
        if(str.join("")[n-1] !== undefined) {
            log(parseInt(str.join("")[n - 1]))
            return parseInt(str.join("")[n-1])
        }
    }
}

findNthDigit(100000)