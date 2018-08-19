var log = console.log.bind(console)

/**
 * @param {string} s
 * @return {number}
 * "Hello World"
 输出: 5
 给定一个仅包含大小写字母和空格 ' ' 的字符串，返回其最后一个单词的长度。
 如果不存在最后一个单词，请返回 0 。
 */
var lengthOfLastWord = function (s) {
    // 如果有多个空格在一起,那么删除所有的空格
    var arr = s.split(" ")
    for (var i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === "") {
            arr = arr.splice(0, i)
        } else {
            return arr[arr.length - 1].length
        }
    }
    return 0
};