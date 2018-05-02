var log = console.log.bind(console)
/**
 * @param {string[]} words
 * @return {string[]}
 *
 * 输入: ["Hello", "Alaska", "Dad", "Peace"]
 * 输出: ["Alaska", "Dad"]
 *
 */
var list0 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"]
var list1 = ["a", "s", "d", "f", "g", "h", "j", "k", "l"]
var list2 = ["z", "x", "c", "v", "b", "n", "m"]

var findWords = function (words) {
    var result = []

    for (var i = 0; i < words.length; i++) {
        var flag0 = words[i].toLowerCase().split("").every(function (item) {
            // 如果不等于 -1 ,表示找到了 flag 是 true
            return (list0.indexOf(item) !== -1)
        })

        if (flag0 === false) {
            // log("查找失败0")
            continue
        } else {
            // log("查找成功0")
            result.push(words[i])
        }
    }

    // log("第一阶段结束")

    for (var j = 0; j < words.length; j++) {
        var flag1 = words[j].toLowerCase().split("").every(function (item) {
            // 如果不等于 -1 ,表示找到了 flag 是 true
            // log(item)
            return (list1.indexOf(item) !== -1)
        })

        if (flag1 === false) {
            // log("查找失败1")
            continue
        } else {
            result.push(words[j])
        }
    }
    for (var k = 0; k < words.length; k++) {
        var flag2 = words[k].toLowerCase().split("").every(function (item) {
            // 如果不等于 -1 ,表示找到了 flag 是 true
            return (list2.indexOf(item) !== -1)
        })

        if (flag2 === false) {
            // log("查找失败2")
            continue
        } else {
            result.push(words[k])
        }
    }
    // console.log(result)
    return result
}

findWords(["Hello", "Alaska", "Dad", "Peace"])