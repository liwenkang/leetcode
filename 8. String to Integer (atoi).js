const log = console.log.bind(console)

var myAtoi = function (str) {
    var result = parseInt(str)
    if (isNaN(result)) {
        return 0
    }
    if (result <= -2147483648) {
        return -2147483648
    }
    if (result >= 2147483647) {
        return 2147483647
    }
    return result
}

log(myAtoi("42"))
log(myAtoi("   -42"))
log(myAtoi("4193 with words"))
log(myAtoi("words and 987"))
log(myAtoi("-91283472332"))