const log = console.log.bind(console)

var generateParenthesis = function (n) {
    var result = []
    if (n === 0) {
        result.push("")
    } else {
        for (var i = 0; i < n; i++) {
            for (var left of generateParenthesis(i)) {
                for (var right of generateParenthesis(n - 1 - i)) {
                    result.push("(" + left + ")" + right)
                }
            }
        }
    }
    return result
}

// var generateParenthesis = function (n) {
//     var result = []
//
//     function generate(p, left, right) {
//         if (left > 0) {
//             generate(p + "(", left - 1, right)
//         }
//
//         if (right > left) {
//             generate(p + ")", left, right - 1)
//         }
//
//         if (right === 0) {
//             result.push(p)
//         }
//
//         return result
//     }
//
//     return generate("", n, n)
// }

log(generateParenthesis(3))