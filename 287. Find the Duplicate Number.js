const log = console.log.bind(console)

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    nums.sort(function (a, b) {
        return a - b
    })
    for (var i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            return nums[i]
        }
    }
}


findDuplicate([7, 9, 7, 4, 2, 8, 7, 7, 1, 5])