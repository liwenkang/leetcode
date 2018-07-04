const log = console.log.bind(console)

/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
    var countA = 0
    for (var i = 0; i < s.length; i++) {
        if (s[i] === "A") {
            countA++
        }
        if (s[i] === "L" && s[i + 1] === "L" && s[i + 2] === "L") {
            return false
        }
    }
    if (countA > 1) {
        return false
    }
    return true
}

checkRecord("PPALLP")
checkRecord("PPALLPPPPPLLPLL")