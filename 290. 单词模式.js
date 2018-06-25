var getRepeateIndex = function (pattern) {
    var resultIndex = []
    pattern = pattern.split("")
    var noRepeate = []

    for (var i = 0; i < pattern.length; i++) {
        if (!noRepeate.includes(i)) {
            var indexSingle = []
            var flag = false
            for (var j = i + 1; j < pattern.length; j++) {
                if (pattern[i] === pattern[j]) {
                    /* 有相同的 */
                    flag = true
                    indexSingle.push(i, j)
                    noRepeate.push(j)
                }
            }
            if (flag) {
                indexSingle = Array.from(new Set(indexSingle))
                if (indexSingle.length > 0) {
                    resultIndex.push(indexSingle)
                }
            } else {
                /* 说明没有和 i 相同的 */
                resultIndex.push([i])
            }
        }
    }
    return resultIndex
}

var wordPattern = function (pattern, str) {
    /* 首先分析 pattern */
    str = str.split(" ")
    if (pattern.length !== str.length) {
        return false
    }
    var repeateIndex = getRepeateIndex(pattern)

    for (var i = 0; i < repeateIndex.length; i++) {
        var flag = true
        if (repeateIndex[i].length > 1) {
            for (var j = 1; j < repeateIndex[i].length; j++) {
                if (str[repeateIndex[i][0]] !== str[repeateIndex[i][j]]) {
                    flag = false
                }
            }
        }
        if (!flag) {
            // log("前面", false)
            return false
        }
    }

    /* 取到 index 的第一个 num */
    var diffArr = []
    for (var j = 0; j < repeateIndex.length; j++) {
        /*  */
        diffArr.push(repeateIndex[j][0])
    }

    /* 比较首个字符是否相同, 相同就是 false */
    for (var m = 0; m < diffArr.length; m++) {
        for (var n = m + 1; n < diffArr.length; n++) {
            if (str[diffArr[m]] === str[diffArr[n]]) {
                // log("后面", false)
                return false
            }
        }
    }

    // log(true)
    return true
}