const log = console.log.bind(console)
/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
    J = J.split("")
    var count = 0
    for (var i = 0; i < S.length; i++) {
        if (J.includes(S[i])) {
            count++
        }
    }
    return count
}

numJewelsInStones("aA", "aAAbbbb")