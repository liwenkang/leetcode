const log = console.log.bind(console)

/**
 * @param {string} S
 * @return {string[]}
 */

var judgeNum = function (str) {
    var num = str.charCodeAt(0)
    if (num >= 48 && num <= 57) {
        return true
    } else {
        return false
    }
}

var letterCasePermutation = function (S) {
    var subs = [""]
    var length = S.length
    // length 就是字符串的长度
    for (var i = 0; i < length; i++) {
        var str = S[i]
        if (judgeNum(str)) {
            // 是数字
            subs = subs.map(value => value + str)
        } else {
            // 是字符串
            var tmp = []
            subs.forEach(value => {
                tmp.push(str.toLocaleUpperCase() + value)
                tmp.push(str.toLocaleLowerCase() + value)
            })
            subs = tmp
        }
    }
    return subs
}

// var letterCasePermutation = function (S) {
//     if (S === "") {
//         return [""]
//     }
//     if (parseInt(S) + "" === S) {
//         return [S]
//     }
//
//     var parts = []
//     // 大小写的全排列
//     var strIndex = []
//     for (var i = 0; i < S.length; i++) {
//         if (/[a-zA-Z]/.test(S[i])) {
//             strIndex.push(i)
//         }
//     }
//
//     if (strIndex[0] > 0) {
//         parts.push(S.slice(0, strIndex[0]))
//     }
//     for (var i = 0; i < strIndex.length; i++) {
//         parts.push(S.slice(strIndex[i], strIndex[i + 1]))
//     }
//     if(parts.length === 1) {
//         return [parts[0].toLocaleLowerCase(), parts[0].toLocaleUpperCase()]
//     }
//
//     var output = []
//     var out = []
//     var o = []
//
//     // parts 中的字符,先转换为小写,然后转换为大写,分别入栈
//     function repeateAdd(parts) {
//         var str = parts.shift()
//         var upper = str.toLocaleUpperCase()
//         var lower = str.toLocaleLowerCase()
//         output.push(upper, lower)
//         while (parts.length > 0) {
//             var part = parts.shift()
//             var up = part.toLocaleUpperCase()
//             var low = part.toLocaleLowerCase()
//
//             while (output.length > 0) {
//                 var one = output.shift()
//                 var str1 = one + up
//                 var str2 = one + low
//                 out.push(str1)
//                 out.push(str2)
//                 if (str1.length === S.length && !o.includes(str1)) {
//                     o.push(one + up)
//                 }
//                 if (str2.length === S.length && !o.includes(str2)) {
//                     o.push(one + low)
//                 }
//             }
//             var maxLength = -Infinity
//             for (var i = 0; i < out.length; i++) {
//                 // 这里只加 out[i] 最长的部分
//                 if (maxLength < out[i].length) {
//                     maxLength = out[i].length
//                 }
//             }
//
//             output = out.filter(function (value) {
//                 if (value.length === maxLength) {
//                     return true
//                 }
//             })
//         }
//         return o
//     }
//
//     return repeateAdd(parts)
// }


log(letterCasePermutation("a1"))
// ["a1b2", "a1B2", "A1b2", "A1B2"]
// letterCasePermutation("3z4")
// // // ["3z4", "3Z4"]
// letterCasePermutation("12345")
// //  ["12345"]