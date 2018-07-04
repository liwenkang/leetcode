const log = console.log.bind(console)

const digitWidth = function (num) {
    var count = 0
    while (num > 0) {
        var x = num % 10
        log(x)
        num = (num - x) / 10
        count++
    }
    log(count)
}


const f = function (x, y) {
    return x * x + 2 * y
}

digitWidth(1234)