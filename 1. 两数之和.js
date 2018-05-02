/**
 * 双层遍历查找
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
    for (var i = 0; i <= nums.length - 2; i++) {
        for (var j = i + 1; j <= nums.length - 1; j++) {
            if (nums[i] + nums[j] === target) {
                var arr = [i, j]
                // console.log(arr)  // test log
                return arr
            }
        }
    }
}

twoSum([7, 7, 11, 2], 9)