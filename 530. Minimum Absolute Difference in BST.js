const log = console.log.bind(console)

var getMinimumDifference = function (root) {
    var arr = []
    var helper = function (root) {
        if (root) {
            arr.push(root.val)
            helper(root.left)
            helper(root.right)
        }
    }
    helper(root)
    // 取得差值最小的
    var min = Infinity
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (Math.abs(arr[i] - arr[j]) < min) {
                min = Math.abs(arr[i] - arr[j])
            }
        }
    }
    return min
}

getMinimumDifference({
    val: 1,
    left: null,
    right: {
        val: 3,
        left: {
            val: 2,
            left: null,
            right: null
        },
        right: null
    }
})