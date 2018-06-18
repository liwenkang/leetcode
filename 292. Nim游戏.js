var log = console.log.bind(console)

/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function (n) {
    /* 我能赢的条件就是 在他下手时,仍有4块石头 */
    /* 我输,也就是 4 的倍数时,必输 */
    if (n % 4 === 0) {
        return false
    }
}