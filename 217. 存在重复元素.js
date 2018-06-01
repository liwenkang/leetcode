var log = console.log.bind(console)
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    var newArr = new Set(nums)
    if(nums.length === newArr.size) {
        return false
    }else {
        return true
    }
}

containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])