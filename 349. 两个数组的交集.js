var unique = function (array) {
    return Array.from(new Set(array))
}

var intersection = function (nums1, nums2) {
    // 计算数组交集
    var arr1 = unique(nums1)
    var arr2 = unique(nums2)
    var result = []
    for (var i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            result.push(arr1[i])
        }
    }
    return result
}