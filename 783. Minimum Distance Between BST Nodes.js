const log = console.log.bind(console)

var minDiffInBST = function (root) {
    var result = []
    var helper = function (root) {
        if (root) {
            result.push(root.val)
            helper(root.left)
            helper(root.right)
        }
    }
    helper(root)
    // 找到 result 中最接近的两个数字
    result.sort((a, b) => a - b)
    var min = Infinity
    for (var i = 1; i < result.length; i++) {
        var diff = result[i] - result[i - 1]
        if(diff < min) {
            min = diff
        }
    }
    return min
}