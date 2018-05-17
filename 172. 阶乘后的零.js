var log = console.log.bind(console)

var cal = function (x) {
    var fiveTimes = 0
    while (x % 5 === 0) {
        fiveTimes++
        x = x / 5
    }
    return fiveTimes
}


var trailingZeroes = function (n) {
    var fiveTimes = 0
    for (var i = n; i >= 1; i--) {
        var x = i
        if (x % 5 === 0) {
            break
        }
    }
    for (var i = x; i >= 5; i -= 5) {
        fiveTimes += cal(i)
    }
    return fiveTimes
};