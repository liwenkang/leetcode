const log = console.log.bind(console)

//

var eachArray = function (ary, action) {
    for (var i = 0; i < ary.length; i++) {
        action(ary[i])
    }
}

eachArray([1, 2, 3], console.log)

var f = function (n, action) {
    do {
        var digit = n % 10
        action(digit)
        n = (n - digit) / 10
    } while (n > 0)
}

f(n, action)
