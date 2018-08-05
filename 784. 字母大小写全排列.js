const log = console.log.bind(console)

/**
 * @param {string} S
 * @return {string[]}
 */

var reduceDimension = function (arr) {
    return Array.prototype.concat.apply([], arr)
}

var changeStr = function (str, index) {
    // 改变 index 位置的大小写
    var arr = str.split("")
    if (arr[index].toLowerCase() === arr[index]) {
        // 是小写
        arr[index] = arr[index].toUpperCase()
    } else {
        // 是大写
        arr[index] = arr[index].toLowerCase()
    }
    return arr.join("")
}

var getStrIndex = function (str) {
    var result = []
    for (var i = 0; i < str.length; i++) {
        var num = parseInt(str[i])
        if (num >= 0 && num <= 9) {

        } else {
            result.push(i)
        }
    }
    return result
}

var getStrArr = function (strIndex) {
    var out = []
    var result = []
    var x = []

    if(strIndex.length === 0) {
        return []
    }else if(strIndex.length === 1) {
        for (var i = 0; i < strIndex.length; i++) {
            var arr = x.concat(strIndex[i])
            result.push(arr)
        }
        out.push(result)
        return out
    }else {
        for (var i = 0; i < strIndex.length; i++) {
            var arr = x.concat(strIndex[i])
            result.push(arr)
        }
        out.push(result)

        var addOne = function (strIndex, result) {
            var newArr = []
            for (var i = 0; i < strIndex.length; i++) {
                for (var j = 0; j < result.length; j++) {
                    if (result[j][result[j].length - 1] < strIndex[i]) {
                        var arr = result[j].concat(strIndex[i])
                        newArr.push(arr)
                    }
                }
            }
            out.push(newArr)
            if (newArr[0].length === strIndex.length) {
                return out
            }
            addOne(strIndex, newArr)
        }
        addOne(strIndex, result)
        var output = reduceDimension(out)
        return output
    }
}

var letterCasePermutation = function (S) {
    var strIndex = getStrIndex(S)
    var strArr = getStrArr(strIndex)

    var result = [S]
    for (var i = 0; i < strArr.length; i++) {
        var str = S
        for (var j = 0; j < strArr[i].length; j++) {
            str = changeStr(str, strArr[i][j])
        }
        result.push(str)
    }
    return result
    // output 就是要替换的元素
}
//
letterCasePermutation("a1b2")
letterCasePermutation("3z4")
letterCasePermutation("12345")