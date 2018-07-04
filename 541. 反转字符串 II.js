const log = console.log.bind(console)

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 * 给定一个字符串和一个整数 k，你需要对从字符串开头算起的每个 2k 个字符的前k个字符进行反转。
 * 如果剩余少于
 * k 个字符，则将剩余的所有全部反转。
 * 如果有 K<= <2K 字符，则反转前 k 个字符，并将剩余的字符保持原样。
 */
var reverseStr = function (s, k) {
    // 2k 个 4 个分开
    var result = []
    for (var i = 0; i < s.length; i += (2 * k)) {
        result.push(s.slice(i, i + 2 * k))
    }
    for (var j = 0; j < result.length - 1; j++) {
        result[j] = result[j].slice(0, k).split("").reverse().join("") + result[j].slice(k)
    }

    if (result[result.length - 1].length < k) {
        result[result.length - 1] = result[result.length - 1].split("").reverse().join("")
    } else {
        result[result.length - 1] = result[result.length - 1].slice(0, k).split("").reverse().join("") + result[result.length - 1].slice(k)
    }

    result = result.join("")
    log(result)
}

reverseStr("abcdefg", 2)