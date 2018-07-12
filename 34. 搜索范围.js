const log = console.log.bind(console)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    var startIndex = nums.indexOf(target)
    var endIndex = nums.lastIndexOf(target)
    return [startIndex, endIndex]
}