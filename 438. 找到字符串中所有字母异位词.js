const log = console.log.bind(console)

var judgeObj = function (obj1, obj2) {
    var flag = true
    Object.keys(obj1).forEach(function (key) {
        if (obj1[key] !== obj2[key]) {
            flag = false
        }
    })
    return flag
}

var countStr = function (str) {
    var dict = {}
    for (var i = 0; i < str.length; i++) {
        if (dict[str[i]] === undefined) {
            dict[str[i]] = 1
        } else {
            dict[str[i]]++
        }
    }
    return dict
}

var findAnagrams = function (s, p) {
    var len = p.length
    var dictP = countStr(p)
    var arr = []
    for (var i = 0; i < s.length; i++) {
        var strDict = countStr(s.slice(i, i + len))
        if (judgeObj(dictP, strDict) && judgeObj(strDict, dictP)) {
            arr.push(i)
        }
    }
    return arr
}

findAnagrams("cbaebabacd", "abc")