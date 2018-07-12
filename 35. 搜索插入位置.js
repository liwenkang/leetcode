var log = console.log.bind(console)
/**
 * 推荐使用二分法
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    // 假设插入的值是很小的
    var arr = nums
    for (var i = 0; i < arr.length; i++) {
        if (target <= arr[i]) {
            // log("<==", i)
            return i
        }
    }
    // log("最后", nums.length)
    return nums.length
};

searchInsert([1, 3, 5, 6], 5)
searchInsert([1, 3, 5, 6], 2)
searchInsert([1, 3, 5, 6], 7)
searchInsert([1, 3, 5, 6], 0)

/*
* 输入: [1,3,5,6], 5
* 输入: [1,3,5,6], 2
* 输出: 1
* */