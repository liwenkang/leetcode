const log = console.log.bind(console)

var getSum = function (root) {
    // 返回该节点子树之和
    var sum = 0
    if (!root) {
        return 0
    }

    function preOrder(root) {
        if (root) {
            sum += root.val
            preOrder(root.left)
            preOrder(root.right)
        }
    }

    preOrder(root)
    return sum
}

var findTilt = function (root) {
    var result = 0

    function preOrder(root) {
        if (root) {
            if (root.left !== null && root.right !== null) {
                result += Math.abs(getSum(root.left) - getSum(root.right))
            } else if (root.left !== null && root.right === null) {
                result += Math.abs(getSum(root.left))
            } else if (root.left === null && root.right !== null) {
                result += Math.abs(getSum(root.right))
            }
            preOrder(root.left)
            preOrder(root.right)
        }
    }

    preOrder(root)
    return result
}

findTilt({
    val: 1,
    left: null,
    right: {
        val: 2,
        left: null,
        right: null
    }
})