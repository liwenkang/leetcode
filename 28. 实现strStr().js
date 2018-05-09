var log = console.log.bind(console)

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (needle.length === 0) {
        return 0
    }
    var str = haystack
    var pointStr = needle[0]
    // 首先取到 needle 的第一个字符,然后在 haystack 中找到对应的位置(所有的位置)
    var numArr = []
    for (var i = 0; i < str.length; i++) {
        if (str[i] === pointStr) {
            numArr.push(i)
        }
    }
    for (var j = 0; j < numArr.length; j++) {
        if (needle === str.slice(numArr[j], numArr[j] + needle.length)) {
            return numArr[j]
        }
    }
    return -1
}

/*
* 输入: haystack = "hello", needle = "ll"
* 输出: 2
*/

strStr("hello", "ll")