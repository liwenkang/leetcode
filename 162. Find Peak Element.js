const log = console.log.bind(console)
/*
* Example 1:

Input: nums = [1,2,3,1]
Output: 2
Explanation: 3 is a peak element and your function should return the index number 2.
Example 2:

Input: nums = [1,2,1,3,5,6,4]
Output: 1 or 5
Explanation: Your function can return either index number 1 where the peak element is 2,
             or index number 5 where the peak element is 6.
             */
var findPeakElement = function (nums) {
    if (nums[0] > nums[1]) {
        return 0
    }
    if (nums[nums.length - 1] > nums[nums.length - 2]) {
        return nums.length - 1
    }

    for (var i = 1; i < nums.length - 1; i++) {
        if(nums[i] > nums[i-1] && nums[i] > nums[i+1]) {
            return i
        }
    }
}