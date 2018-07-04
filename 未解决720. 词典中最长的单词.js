const log = console.log.bind(console)

/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function (words) {
    var maxLength = 0
    var word = ""
    for (var i = 0; i < words.length; i++) {
        if (words[i].length > maxLength) {
            maxLength = words[i].length
            word = words[i]
        }
    }
    log(maxLength)
    log(word)
}

longestWord(["a", "banana", "app", "appl", "ap", "apply", "apple"])