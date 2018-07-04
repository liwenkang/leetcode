const log = console.log.bind(console)
/**
 * @param {number[]} nums
 * @return {boolean}
 */

var sortNum = function (arr) {
    // 递增
    var temp = arr.slice(0)
    temp.sort(function (a, b) {
        return a - b
    })
    return temp
}

var checkPossibility = function (nums) {

    var arr = sortNum(nums)

    if (nums.toString() === arr.toSting()) {
        return true
    }

    var arr1 = arr.slice(0)
    var arr2 = arr.slice(0)

    var nums1 = nums.slice(0)
    var nums2 = nums.slice(0)

    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] !== nums1[i]) {
            arr1.splice(arr1.indexOf(nums1[i], i), 1)
            nums1.splice(i, 1)
            if (nums1.toString() === arr1.toString()) {
                log(true)
                return true
            }
            break
        }
    }

    for (var i = 0; i < arr2.length; i++) {
        if (arr2[i] !== nums2[i]) {
            nums2.splice(nums2.indexOf(arr2[i], i), 1)
            arr2.splice(i, 1)
            if (nums2.toString() === arr2.toString()) {
                log(true)
                return true
            }
            break
        }
    }
    return false
}

checkPossibility([4, 2, 3])