const log = console.log.bind(console)

// var largestNumber = function (nums) {
//     // 按照某个顺序排列后, 组成的数字最大
//     nums.sort((a, b) => {
//         var x = a.toString()
//         var y = b.toString()
//         var count = 0
//         while (x[count] === y[count]) {
//             count++
//             if (x[count] === undefined && y[count] === undefined) {
//                 return 1
//             }
//         }
//         if (x[count] !== undefined && y[count] !== undefined) {
//             return y[count] - x[count]
//         } else if (x[count] === undefined) {
//             if (x[count - 1] === y[count]) {
//                 var n = count - 1
//                 while (x[count - 1] === y[n + 1]) {
//                     n++
//                 }
//                 return y[n + 1] || 100 - x[count - 1]
//             }
//
//
//             if (y[count] === y[0]) {
//                 var index = 0
//                 while (x[index] === y[index + 1]) {
//                     index++
//                 }
//                 return x[index] - y[index + 1]
//             } else {
//                 return y[count] - y[0]
//             }
//         } else if (y[count] === undefined) {
//             if (x[count] === y[count - 1]) {
//                 var n = count - 1
//                 while (y[count - 1] === x[n + 1]) {
//                     n++
//                 }
//                 return y[count - 1] - x[n + 1] || 100
//             }
//
//             if (x[count] === x[0]) {
//                 var index = 0
//                 while (y[index] === x[index + 1]) {
//                     index++
//                 }
//                 return x[index + 1] - y[index]
//             } else {
//                 return x[0] - x[count]
//             }
//         }
//     })
//     var result = nums.join("")
//     if (nums[0] === 0) {
//         return "0"
//     } else {
//         return result
//     }
// };
//

var largestNumber = function (nums) {
    nums.sort((a, b) => (b + "" + a) - (a + "" + b))
    var i = 0
    while (nums[i] === 0) {
        i++
    }
    var result = nums.slice(i)

    return result.length === 0 ? "0" : result.join('')
}

log(largestNumber([9, 98, 987, 9876]))
log(largestNumber([0, 0]))

// largestNumber([9051,5526,2264,5041,1630,5906,6787,8382,4662,4532,6804,4710,4542,2116,7219,8701,8308,957,8775,4822,396,8995,8597,2304,8902,830,8591,5828,9642,7100,3976,5565,5490,1613,5731,8052,8985,2623,6325,3723,5224,8274,4787,6310,3393,78,3288,7584,7440,5752,351,4555,7265,9959,3866,9854,2709,5817,7272,43,1014,7527,3946,4289,1272,5213,710,1603,2436,8823,5228,2581,771,3700,2109,5638,3402,3910,871,5441,6861,9556,1089,4088,2788,9632,6822,6145,5137,236,683,2869,9525,8161,8374,2439,6028,7813,6406,7519])