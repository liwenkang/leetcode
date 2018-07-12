const log = console.log.bind(console)

var sortNum = function (arr) {
    var a = arr.slice(0)
    a.sort(function (a, b) {
        return a - b
    })
    log(a)
}
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    return sortNum(nums)
}

sortNum([2, 0, 2, 1, 1, 0])