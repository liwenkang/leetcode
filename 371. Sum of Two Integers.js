const log = console.log.bind(console)
// 坑爹
var getSum = function (a, b) {
    while (b) {
        var carry = (a & b) << 1
        a = a ^ b
        b = carry
    }
    return a
}