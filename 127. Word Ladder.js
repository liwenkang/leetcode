const log = console.log.bind(console)
/*
* Input:
beginWord = "hit",
endWord = "cog",
wordList = ["hot","dot","dog","lot","log","cog"]

Output: 5

Explanation: As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
return its length 5.
*/
var ladderLength = function (beginWord, endWord, wordList) {
    var index = wordList.indexOf(beginWord)
    if (index >= 0) {
        wordList.splice(index, 1)
    }
    if (wordList.indexOf(endWord) === -1) {
        return 0
    }
    // 广度优先搜索
    // 在 wordList 中找到相差一个字符的字符串
    var flag = false
    var min = Infinity
    var helper = function (beginWord, endWord, wordList, count = 0) {
        if (beginWord === endWord) {
            if (count < min) {
                min = count
            }
        }
        var result = []
        for (var i = 0; i < beginWord.length; i++) {
            var str = beginWord.slice(0, i) + "\\w" + beginWord.slice(i + 1)
            var reg = new RegExp(str)
            var arr = []
            var tmp = wordList.slice()
            for (var j = 0; j < tmp.length; j++) {
                if (reg.test(tmp[j]) && tmp[j] !== beginWord) {
                    // 应该删掉所有同时匹配到的
                    flag = true
                    arr.push(tmp[j])
                    tmp.splice(j, 1)
                    j--
                }
            }
            if (arr.length > 0) {
                result.push([arr, tmp, count + 1])
            }
        }
        for (var i = 0; i < result.length; i++) {
            var one = result[i]
            var num = count + 1
            for (var j = 0; j < one[0].length; j++) {
                helper(one[0][j], endWord, one[1], num)
            }
        }
        return result
    }
    helper(beginWord, endWord, wordList)
    if (flag) {
        return min + 1
    } else {
        return 0
    }
};