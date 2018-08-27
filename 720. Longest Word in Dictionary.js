const log = console.log.bind(console)
/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function (words) {
    var result = []
    for (var i = 0; i < words.length; i++) {
        var word = words[i]
        var length = word.length
        var flag = true
        while (length > 0) {
            if (words.indexOf(word.slice(0, length)) > -1) {
                length--
            } else {
                flag = false
                break
            }
        }
        if (flag) {
            result.push(word)
        }
    }
    result.sort((a, b) => {
        return b.length - a.length
    })
    var maxLength = result[0].length
    result = result.filter(string => {
        return string.length === maxLength
    })
    // 所有元素长度都相同
    log(result)
    result.sort((a, b) => {
        var index = 0
        while (index < a.length - 1 && a[index].charCodeAt() === b[index].charCodeAt()) {
            index++
        }
        return a[index].charCodeAt() - b[index].charCodeAt()
    })
    log(result)
    return result[0]
}
// log(longestWord(["b", "a", "c"]))
// longestWord(["rac", "rs", "ra", "on", "r", "otif", "o", "onpdu", "rsf", "rs", "ot", "oti", "racy", "onpd"])
longestWord(["ts", "e", "x", "pbhj", "opto", "xhigy", "erikz", "pbh", "opt", "erikzb", "eri", "erik", "xlye", "xhig", "optoj", "optoje", "xly", "pb", "xhi", "x", "o"])