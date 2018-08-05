const log = console.log.bind(console)

var diameterOfBinaryTree = function (root) {
    var max = 0
    var maxDepth = function (root) {
        if (root === null) {
            return 0
        }
        var left = maxDepth(root.left)
        var right = maxDepth(root.right)
        max = Math.max(max, left + right)
        return Math.max(left, right) + 1
    }

    return max
}

diameterOfBinaryTree({
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4,
            left: null,
            right: null
        },
        right: {
            val: 5,
            left: null,
            right: null
        }
    },
    right: {
        val: 3,
        left: null,
        right: null
    }
})