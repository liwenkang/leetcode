const log = console.log.bind(console)

/*
* s = "3[a]2[bc]", return "aaabcbc".
* s = "3[a2[c]]", return "accaccacc".
* s = "2[abc]3[cd]ef", return "abcabccdcdcdef".
*/

var decodeString = function (s) {
    // 比如要处理  "5[a3[a2[c]]]"
    // a example s = "5[a3[a2[c]]]"
    var reg = /(\d+)\[(\w+(?=\]))\]/
    while (s.indexOf("[") >= 0) {
        var arr = reg.exec(s)

        // 整个要替换的部分,包含重复次数,括号.以及字符串,  第一次就是 "2[c]"
        // 1, we get a string which we need to replace.
        // in the first loop: "2[c]"
        var shouldReplaceStr = arr[0]

        // 字符串要重复的遍数,第一次就是 "2"
        // 2, we get a number "2"
        // in the first loop: "2"
        var num = arr[1]

        // 要重复的字符串,第一次就是 "c"
        // 3, we get a string "c"
        var str = arr[2]

        // 4. replace
        s = s.replace(shouldReplaceStr, str.repeat(parseInt(num)))
    }
    return s
}

decodeString("5[a3[a2[c]]]")