const log = console.log.bind(console)

/**
 * 有毒
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    var dict = {
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t", "u", "v"],
        "9": ["w", "x", "y", "z"]
    }

    var arr = digits.split("")
    var result = []
    for (var i = 0; i < arr.length; i++) {
        var strArr = dict[arr[i]]
        result.push(strArr)
    }
    log(result)
    var out = []

    for (var i = 0; i < result[0].length; i++) {
        for (var j = 0; j < result[1].length; j++) {
            for(var k = 0; k < result[2].length; k++) {
                var s = result[0][i]
                s = s + result[1][j]
                s = s + result[2][k]
                out.push(s)
            }
        }
    }
    log(out)
}

letterCombinations("222")