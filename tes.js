var log = console.log.bind(console)

var fn = function (a, b, c) {
    var s_delta = Math.sqrt(b * b - 4 * a * c)
    if (s_delta > 0) {
        var resultX1 = (-b + s_delta) / (2 * a)
        var resultX2 = (-b - s_delta) / (2 * a)
        log("resultX1", resultX1)
        log("resultX2", resultX2)
    } else if (s_delta === 0) {
        var result = (-b + s_delta) / (2 * a)
        log(result)
    }
}


var fn2 = function (a, b, c, d, e, f) {
    var x = (e * c - b * f) / (a * e - b * d)
    var y = (d * c - a * f) / (b * d - a * e)
    log("x", x)
    log("y", y)
}

fn2(3,5,1,8,-4,7)