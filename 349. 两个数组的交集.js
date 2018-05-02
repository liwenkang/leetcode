/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var unique = function (array) {
    return [...new Set(array)]
}

var intersection = function (nums1, nums2) {
    // 计算数组交集
    // 1. 两个数组去重
    var arr1 = unique(nums1)
    var arr2 = unique(nums2)
    var result = []
    // 2. 遍历
    for (var i = 0; i < arr1.length; i++) {
        // 从数组 1 中取第一个数,在数组 2 中遍历,有就加入新数组
        if (arr2.includes(arr1[i])) {
            result.push(arr1[i])
        }
    }
    console.log(result)
    return result
}

intersection([], [])