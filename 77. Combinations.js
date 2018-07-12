const log = console.log.bind(console)

const log = console.log.bind(console)

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    // 递归求解
    // 如果有1个值,我就直接输出
    // 如果有两个值,我就一前一后,一后一前输出
    // 如果有三个以上的值,我就得把他们的值减少
    var length = nums.length
    return perm(length)

    function perm(length) {
        if (length === 1) {
            return [[nums[0]]]
        } else if (length === 2) {
            return [[nums[0], nums[1]], [nums[1], nums[0]]]
        } else {
            // 也就是说超过三个了
            var output = []
            var arr = perm(length - 1)          // 如果 length 是3,我就算2个的全排列,如果 length 是4我就算三个的全排列
            var addNum = nums[length - 1]
            for (var i = 0; i < arr.length; i++) {
                for (var j = 0; j <= arr[i].length; j++) {
                    var a = arr[i].slice()
                    a.splice(j, 0, addNum)
                    output.push(a)
                }
            }
            return output
        }
    }
}

log(permute([1, 2, 3, 4]))
log(permute(["a","b","c","d"]))