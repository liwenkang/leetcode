const log = console.log.bind(console)

var nthFibonaaci = function (n) {
    if (n > 0) {
        if (n === 1 || n === 2) {
            return 1
        }
        return nthFibonaaci(n - 1) + nthFibonaaci(n - 2)
    }
}

var nthFibonaaci2 = function (n) {
    if (n > 0) {
        var fib = [0, 1]
        for (var i = 2; i <= n; i++) {
            fib[i] = fib[i - 1] + fib[i - 2]
        }
        return fib[n]
    }
}

var nthFibonaaci3 = function (n) {
    if (n > 0) {
        var a = 0
        var b = 1
        var c
        for (var i = 2; i <= n; i++) {
            c = a + b
            a = b
            b = c
        }
        return b
    }
}