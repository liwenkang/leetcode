const log = console.log.bind(console)
/*
* Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

Note: The algorithm should run in linear time and in O(1) space.

Example 1:

Input: [3,2,3]
Output: [3]
Example 2:

Input: [1,1,1,3,3,2,2,2]
Output: [1,2]
*/
var majorityElement = function (nums) {
    var times = nums.length / 3
    var dict = {}
    for (var i = 0; i < nums.length; i++) {
        if (dict[nums[i]] === undefined) {
            dict[nums[i]] = 1
        } else {
            dict[nums[i]]++
        }
    }
    var result = []
    for(var key in dict) {
        if(dict[key] > times) {
            result.push(parseInt(key))
        }
    }
    return result
}

majorityElement([3,2,3])
majorityElement([1,1,1,3,3,2,2,2])