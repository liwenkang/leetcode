const log = console.log.bind(console)

/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
    var countR = 0
    var countL = 0
    var countU = 0
    var countD = 0
    for (var i = 0; i < moves.length; i++) {
        if (moves[i] === "R") {
            countR++
        }
        if (moves[i] === "L") {
            countL++
        }
        if (moves[i] === "U") {
            countU++
        }
        if (moves[i] === "D") {
            countD++
        }
    }
    if (countR === countL && countU === countD) {
        return true
    }else {
        return false
    }
}