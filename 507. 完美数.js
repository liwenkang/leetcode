const log = console.log.bind(console)

/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num) {
    var count = 0
    for (var i = 1; i < Math.sqrt(num); i++) {
        if (num % i === 0) {
            count += (i + num / i)
        }
    }
    return count === 2 * num
}

checkPerfectNumber(28)