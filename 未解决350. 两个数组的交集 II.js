var log = console.log.bind(console)

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    var result = []
    if (nums1.length < nums2) {
        for (var i = 0; i < nums1.length; i++) {
            if (nums2.includes(nums1[i])) {
                result.push(nums1[i])
            }
        }
    } else {
        for (var j = 0; j < nums2.length; j++) {
            if (nums1.includes(nums2[j])) {
                result.push(nums2[j])
            }
        }
    }
    return result
}

intersect([1, 2, 2, 1], [2, 2])