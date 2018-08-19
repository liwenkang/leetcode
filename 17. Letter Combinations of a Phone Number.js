const log = console.log.bind(console)

var dict = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"],
}

var letterCombinations = function (digits) {
    var index = 0
    var result = dict[digits[index++]]
    if (digits.length === 1) {
        return result
    } else {
        var couldOut = []
        while (index < digits.length) {
            var out = []
            // 继续加
            var arr = dict[digits[index]].slice()
            for (var i = 0; i < result.length; i++) {
                for (var j = 0; j < arr.length; j++) {
                    var s = result[i] + arr[j]
                    out.push(s)
                    if (s.length === digits.length) {
                        couldOut.push(s)
                    }
                }
            }
            result = out.slice()
            index++
        }
        return couldOut
    }
}

letterCombinations("333")