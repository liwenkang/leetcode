const log = console.log.bind(console)

var wordBreak = function (s, wordDict) {
    for (var i = 0; i < wordDict.length; i++) {
        if (s.indexOf(wordDict[i]) >= 0) {
            var reg = new RegExp(wordDict[i], "g")
            s = s.replace(reg, "")
        }
    }
    return s.length === 0
}

log(wordBreak("leetcode", ["leet", "code"]))
log(wordBreak("applepenapple", ["apple", "pen"]))
log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]))
log(wordBreak("cars", ["car", "ca", "rs"]))