var log = console.log.bind(console)
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// 数组去重
var getResult = function (nums1, nums2) {
    var result = []
    for (var i = 0; i < nums2.length; i++) {
        if (nums1.includes(nums2[i])) {
            result.push(nums2[i])
            // 找到之后
            // nums1 把 它删掉
            var index = nums1.indexOf(nums2[i])
            nums1 = nums1.slice(0, index).concat(nums1.slice(index + 1))
        }
    }
    return result
}

var intersect = function (nums1, nums2) {
    var result1 = getResult(nums1, nums2)
    var result2 = getResult(nums2, nums1)

    if (result1 < result2) {
        log("result1", result1)
        return result1
    } else {
        log("result2", result2)
        return result2
    }
}

intersect([1, 2, 2, 1], [2, 2])
intersect([3,1,2], [1,1])