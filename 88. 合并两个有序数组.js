var log = console.log.bind(console)

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 * Input:
 nums1 = [1,2,3,0,0,0], m = 3
 nums2 = [2,5,6],       n = 3

 Output: [1,2,2,3,5,6]
 */
var merge = function (nums1, m, nums2, n) {
    // 在 nums1 中直接操作数组
    var length = m + n - 1
    var i = m - 1
    for (var j = n - 1; j >= 0;) {
        if (nums2[j] >= nums1[i]) {
            nums1[length--] = nums2[j--]
        } else {
            nums1[length--] = nums1[i--]
            if (i < 0) {
                // 将后面的值都加到前面
                while (j > -1) {
                    nums1[j] = nums2[j]
                    j--
                }
                break
            }
        }
    }
    return
};

merge([4, 5, 6, 0, 0, 0], 3, [1, 5], 2)