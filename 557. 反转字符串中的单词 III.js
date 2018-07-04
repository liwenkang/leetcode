const log = console.log.bind(console)

/**
 * @param {string} s
 * @return {string}
 * 输入: "Let's take LeetCode contest"
 * 输出: "s'teL ekat edoCteeL tsetnoc"
 */
var reverseWords = function (s) {
    var arr = s.split(" ")
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].split("").reverse().join("")
    }
    return arr.join(" ")
}

reverseWords("Let's take LeetCode contest")

