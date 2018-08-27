const log = console.log.bind(console)
// todo 没看懂
/*
*
* First, I count the number of 1 or 0 grouped consecutively.
For example "0110001111" will be [1, 2, 3, 4].

Second, for any possible substrings with 1 and 0 grouped consecutively, the number of valid substring will be the minimum number of 0 and 1.
For example "0001111", will be min(3, 4) = 3, ("01", "0011", "000111")

"00110011"
Math.min(2,2,2,2) =   "0011", "01", "1100", "10", "0011", and "01".
*/
var countBinarySubstrings = function (s) {
    var result = []
    for (var i = 0; i < s.length; i++) {
        var count = 1
        for (var j = i + 1; j < s.length; j++) {
            if (s[i] === s[j]) {
                count++
            } else {
                break
            }
        }
        i += count - 1
        result.push(count)
    }
    var count = 0
    for (var i = 1; i < result.length; i++) {
        count += Math.min(result[i], result[i - 1])
    }
    return count
}

countBinarySubstrings("00110011")
countBinarySubstrings("10101")