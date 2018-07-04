const log = console.log.bind(console)
/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (nums, r, c) {
    if (r * c !== nums.length * nums[0].length) {
        return nums
    }
    var arr = []
    for (var i = 0; i < nums.length; i++) {
        for (var j = 0; j < nums[i].length; j++) {
            arr.push(nums[i][j])
        }
    }
    var result = []
    // 每 c 个 ,一个数组
    for (var i = 0; i < arr.length; i += c) {
        var item = arr.slice(i, i + c)
        result.push(item)
    }
    return result
}

matrixReshape([[1, 2], [3, 4], [5, 6]], 2, 3)