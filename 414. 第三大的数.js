/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    var arr = Array.from(new Set(nums))
    arr = arr.sort(function (a, b) {
        return b - a
    })

    if (arr[2] !== undefined) {
        return arr[2]
    } else {
        return arr[0]
    }
};