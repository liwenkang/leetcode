var log = console.log.bind(console)

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

var countPrimes = function (num) {
    var result = 0
    for (var i = 2; i < num; i++) {
        if (isPrime(i)) {
            result++
        }
    }
    return result
}

countPrimes(999983)