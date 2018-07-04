const log = console.log.bind(console)

/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 * 输入：S = "ab#c", T = "ad#c"
 * 输出：true
 * 解释：S 和 T 都会变成 “ac”。
 */
var backspaceCompare = function (S, T) {
    while (S[0] === "#") {
        S = S.slice(1)
    }
    while (T[0] === "#") {
        T = T.slice(1)
    }

    for (var i = 1; i < S.length; i++) {
        if (S[i] === "#") {
            S = S.slice(0, i - 1).concat(S.slice(i + 1))
            while (S[0] === "#") {
                S = S.slice(1)
            }
            i -= 2
        }
        log("S", S)
    }
    for (var i = 1; i < T.length; i++) {
        if (T[i] === "#") {
            T = T.slice(0, i - 1).concat(T.slice(i + 1))
            while (T[0] === "#") {
                T = T.slice(1)
            }
            i -= 2
        }
        log("T", T)
    }
    if (S === T) {
        log(true)
        return true
    } else {
        log(false)
        return false
    }
}

// backspaceCompare("ab#c", "ad#c")
// backspaceCompare("ab##", "c#d#")
// backspaceCompare("a##c", "#a#c")
backspaceCompare("a#c", "b")