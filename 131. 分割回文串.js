const log = console.log.bind(console)

var chunk = function (array, size) {
    var result = []
    for (var i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size))
    }
    return result
}

var isReverse = function (str) {
    return str.split("").reverse().join("") === str
}

var judgeArr = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        if (!isReverse(arr[i])) {
            return false
        }
    }
    return true
}

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    // 出现所有的
    // 如果我有 "aab" 三个字符
    // 我要得到
    // ["a","a","b"]
    // ["aa","b"]
    // ["a","ab"]
    // ["aab"]
    // 四种情况

}