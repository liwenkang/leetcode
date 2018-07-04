const log = console.log.bind(console);
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    var length = nums.length
    var result = []
    for (var i = 1; i <= length; i++) {
        if (nums.indexOf(i) === -1) {
            // 没找到
            result.push(i)
        }
    }
    return result
};