const log = console.log.bind(console)

    var divide = function (dividend, divisor) {
        var num = dividend / divisor
        var result
        if (num > 0) {
            result = Math.floor(num)
        } else {
            result = Math.ceil(num)
        }
        if (result < Math.pow(-2, 31)|| result > Math.pow(2, 31) - 1) {
            result = Math.pow(2, 31) - 1
        }
        return result
    };


divide(10, 3)
divide(7, -3)