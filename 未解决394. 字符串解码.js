// 未解决

var log = console.log.bind(console)
/**
 * @param {string} s
 * @return {string}
 * s = "3[a]2[bc]", 返回 "aaabcbc".
 * s = "3[a2[c]]", 返回 "acc acc acc".
 * s = "2[abc]3[cd]ef", 返回 "abc abc cd cd cd ef".
 */

var decodeString = function (s) {
    // 思路 1 : 如果存在括号的嵌套问题,首先要考虑最内层的如何分解开
    // 思路 2 : 如果存在括号的嵌套问题,从外面开始,逐层向内

    // 首先,解决 "3[a]2[bc]"
    var str = s
    var start = str.indexOf("[")
    var repeatIndex = start - 1
    var end = str.indexOf("]", start)

    // 重复的次数,注意检测次数,而不是检测 "[" 的前一位是什么
    var i = 0
    var repeatNum = 0
    while (parseInt(str[repeatIndex - i]) >= 0 && parseInt(str[repeatIndex - i]) <= 9) {
        repeatNum += str[repeatIndex - i] * Math.pow(10, i)
        i++
    }
    // 需要重复的地方
    var repeatStr = str.slice(start + 1, end)

    // 重复的前半段, 此处要和重复的次数挂钩,比如是个位数,就 -1
    // 十位数,就减2
    var sumStr = str.slice(0, start - i)

    for (var i = 0; i < repeatNum; i++) {
        sumStr += repeatStr
    }
    sumStr += str.slice(end + 1)
    if (sumStr.indexOf("[") === -1) {
        log(sumStr)
        return sumStr
    } else {
        // 回调函数
        decodeString((sumStr))
    }
}

var d = function (s) {
    // 思路 1 : 如果存在括号的嵌套问题,首先要考虑最内层的如何分解开
    // 思路 2 : 如果存在括号的嵌套问题,从外面开始,逐层向内

    // 首先,解决 "3[a]2[bc]"
    var str = s
    var start = str.indexOf("[")
    var repeatIndex = start - 1
    var end = str.indexOf("]", start)

    // 重复的次数,注意检测次数,而不是检测 "[" 的前一位是什么
    var i = 0
    var repeatNum = 0
    while (parseInt(str[repeatIndex - i]) >= 0 && parseInt(str[repeatIndex - i]) <= 9) {
        repeatNum += str[repeatIndex - i] * Math.pow(10, i)
        i++
    }
    // 需要重复的地方
    var repeatStr = str.slice(start + 1, end)

    // 重复的前半段, 此处要和重复的次数挂钩,比如是个位数,就 -1
    // 十位数,就减2
    var sumStr = str.slice(0, start - i)

    for (var i = 0; i < repeatNum; i++) {
        sumStr += repeatStr
    }
    sumStr += str.slice(end + 1)
    if (sumStr.indexOf("[") === -1) {
        log(sumStr)
        return sumStr
    } else {
        // 回调函数
        decodeString((sumStr))
    }
}


// decodeString("4[a]5[bc]daw6[dawda]")
d("4[a5[b]]")
4[abbbbb]