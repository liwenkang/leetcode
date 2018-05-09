var log = console.log.bind(console)

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

var carryArr = function (arr) {
    // 将 数组 转换为 0 1 的形式
    for (var i = arr.length - 1; i > 0; i--) {
        if (arr[i] === 2) {
            arr[i] = 0
            arr[i - 1] = arr[i - 1] + 1
        }
        if (arr[i] === 3) {
            arr[i] = 1
            arr[i - 1] = arr[i - 1] + 1
        }
    }
    if (arr[0] === 2) {
        arr[0] = 0
    }
    arr.unshift(1)
    return arr
}

var addZero = function (num) {
    // 返回 num 个 0
    if (num === 0) {
        return ""
    }
    var result = ""
    for (var i = 0; i < num; i++) {
        result += "0"
    }
    return result
}

var changeToArr = function (num) {
    // 1000 => [1,0,0,0]
    var num = num.toString()
    var result = []
    for (var i = 0; i < num.length; i++) {
        result[i] = parseInt(num[i])
    }
    return result
}

var addTwoArr = function (arrA, arrB) {
    var result = []
    var flag = arrA.length >= arrB.length ? true : false
    var length = arrA.length >= arrB.length ? arrA.length : arrB.length

}

addTwoArr([1, 0, 0, 0, 0], [1, 0, 0, 0])

var addBinary = function (a, b) {
    var arr = []
    var flag = true
    var arrA = a.split("")
    var arrB = b.split("")
    if (arrA.length >= arrB.length) {
        var difValue = arrA.length - arrB.length
        var result = arrA.slice(0, difValue) + addZero(arrB.length)
    } else {
        var difValue = arrB.length - arrA.length
        var result = arrB.slice(0, difValue) + addZero(arrA.length)
        flag = false
    }
    result = changeToArr(result)


    if (flag) {
        // A 长度大于 B
        arrA = arrA.slice(difValue)
        for (var i = arrB.length - 1; i >= 0; i--) {
            arr[i] = parseInt(arrA[i]) + parseInt(arrB[i])
        }
        var arr = carryArr(arr)
        log('result', result)
        log('arr', arr)

        var resultArr = []
        if (result.length >= arr.length) {
            // result 的 length 长
            log("result >= arr ")

            var differntValue = result.length - arr.length

            if (differntValue >= 0) {
                resultArr = result.slice(0, differntValue) + addZero(arr.length)
                var anotherArr = []
                for (var i = arr.length - 1; i >= 0; i--) {
                    anotherArr[i] = parseInt(arr[i]) + parseInt(result[i])
                }
                log('resultArr118181718', anotherArr)


            }
        } else {
            log("arr > result")
            // arr 的 length 长
            var diffValue = arr.length - result.length
            resultArr = arr.slice(0, difValue) + addZero(difValue)
            log(resultArr)
            for (var i = result.length - 1; i >= 0; i--) {
                resultArr[i] = parseInt(arr[i]) + parseInt(result[i])
            }
            log(resultArr)
        }
    } else {
        // B 长度大于 A
        arrB = arrB.slice(difValue)
        for (var i = arrA.length - 1; i >= 0; i--) {
            arr[i] = parseInt(arrA[i]) + parseInt(arrB[i])
        }
        var arr = carryArr(arr)
        // log('result', result)
        // log("arr", arr)
    }
};

// addBinary("1011", "101")

// addBinary("10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101"
//     , "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011")