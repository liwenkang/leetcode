const log = console.log.bind(console)
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */

let getSum = function (a, b) {
    while (a !== 0) {
        let x = a ^ b // 异或,算出来的是不考虑进位情况下的值
        a = (a & b) << 1 // 与操作 后 * 2,就是看下 进位
        b = x
    }
    return b
}

getSum(0, 10)