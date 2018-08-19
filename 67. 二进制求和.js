const log = console.log.bind(console)

var addBinary = function (a, b) {
    // a b 都是字符串形式的 二进制数, 且不能直接转换成数字
    const arrA = a.split("")
    const arrB = b.split("")
    let minLength
    let diffArr
    if (arrA.length > arrB.length) {
        minLength = arrB.length
        diffArr = arrA.slice(0, arrA.length - arrB.length)
    } else {
        minLength = arrA.length
        diffArr = arrB.slice(0, arrB.length - arrA.length)
    }

    // 最后拼接一下 diffArr 就可以

    // log("diffArr", diffArr)

    for (var m = 0; m < diffArr.length; m++) {
        diffArr[m] = parseInt(diffArr[m])
    }

    var result = []
    for (var i = 0; i < minLength; i++) {
        let numIndexA = arrA[arrA.length - 1 - i]
        let numIndexB = arrB[arrB.length - 1 - i]

        if (numIndexA === "1" && numIndexB === "1") {
            result.unshift(2)
        } else if (numIndexA === "1" || numIndexB === "1") {
            result.unshift(1)
        } else if (numIndexA === "0" && numIndexB === "0") {
            result.unshift(0)
        }
        // [ 1, 1, 2, 1 ]
    }

    // 倒着遍历, 如果有10, 自己变成0,前一位加10
    var flag1 = false
    for (var j = 0; j < result.length; j++) {
        let num = result[result.length - 1 - j]
        if (num === 2) {
            result[result.length - 1 - j] = 0
            if (result[result.length - 2 - j] !== undefined) {
                result[result.length - 2 - j] += 1
            } else if (result[result.length - 2 - j] === undefined) {
                flag1 = true
                break
            }
        }

        if (num === 3) {
            result[result.length - 1 - j] = 1
            if (result[result.length - 2 - j] !== undefined) {
                result[result.length - 2 - j] += 1
            } else if (result[result.length - 2 - j] === undefined) {
                flag1 = true
                break
            }
        }
    }

    //
    // log("diffArr", diffArr)
    // log("result", result)
    // log("flag1", flag1)


    if (flag1) {
        // 要进位
        if (diffArr.length === 0) {
            result.unshift(1)
            // log("位数相同result", result)
            return result.join("")
        }
    }

    var flag2 = false
    if (flag1) {
        if (diffArr[diffArr.length - 1] === 0) {
            // 直接拼接
            diffArr[diffArr.length - 1] = 1
            // log("直接拼接", diffArr.concat(result).join(""))
            return diffArr.concat(result).join("")
        } else if (diffArr[diffArr.length - 1] === 1) {
            // 往前加
            diffArr[diffArr.length - 1] = 2
            for (var k = 0; k < diffArr.length; k++) {
                let num = diffArr[diffArr.length - 1 - k]
                if (num === 2) {
                    diffArr[diffArr.length - 1 - k] = 0
                    if (diffArr[diffArr.length - 2 - k] !== undefined) {
                        diffArr[diffArr.length - 2 - k] += 1
                    } else if (diffArr[diffArr.length - 2 - k] === undefined) {
                        flag2 = true
                        break
                    }
                } else if (num === 3) {
                    diffArr[diffArr.length - 1 - k] = 1
                    if (diffArr[diffArr.length - 2 - k] !== undefined) {
                        diffArr[diffArr.length - 2 - k] += 1
                    } else if (diffArr[diffArr.length - 2 - k] === undefined) {
                        flag2 = true
                        break
                    }
                } else {
                    break
                }
            }
        }
        if (flag2) {
            diffArr.unshift(1)
        }
        // log("进位后拼接", diffArr.concat(result).join(""))
        return diffArr.concat(result).join("")
    } else {
        // 直接拼接
        // log("直接拼接", diffArr.concat(result).join(""))
        return diffArr.concat(result).join("")
    }
};
