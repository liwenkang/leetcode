/**
 * @param {number[]} nums
 * @return {number}
 */

function unique(array) {
    return [...new Set(array)];
}

var removeDuplicates = function(nums) {
    var arr = unique(nums)
    for (var i = 0; i < arr.length; i++) {
        nums[i] = arr[i]
    }
    return arr.length
};