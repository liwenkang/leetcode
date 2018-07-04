const log = console.log.bind(console)

/**
 * @param {number} n
 * @return {string[]}
 * 写一个程序，输出从 1 到 n 数字的字符串表示。
 * 1. 如果 n 是3的倍数，输出“Fizz”；
 * 2. 如果 n 是5的倍数，输出“Buzz”；
 *  3.如果 n 同时是3和5的倍数，输出 “FizzBuzz”。
 */
var fizzBuzz = function (n) {
    var result = []
    for (var i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz")
        } else if (i % 3 === 0) {
            result.push("Fizz")
        } else if (i % 5 === 0) {
            result.push("Buzz")
        } else {
            result.push("" + i)
        }
    }
    log(result)
    return result
}

fizzBuzz(15)