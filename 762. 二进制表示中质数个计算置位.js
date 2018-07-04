const log = console.log.bind(console)

/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var isPrime = function (num) {
    if (num <= 1) {
        return false
    }
    for (var i = 2; i * i <= num; i++) {
        if (num % i == 0) {
            return false
        }
    }
    return true
}

var countPrimeSetBits = function (L, R) {
    var sum = 0
    for (var i = L; i <= R; i++) {
        var str = i.toString(2)
        var count = 0
        for (var j = 0; j < str.length; j++) {
            if (str[j] === "1") {
                count++
            }
        }
        if (isPrime(count)) {
            sum++
        }
    }
    return sum
}

countPrimeSetBits(6, 10)
countPrimeSetBits(10, 15)