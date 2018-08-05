const log = console.log.bind(console)

var binaryTreePaths = function (root) {
    if (!root) {
        return []
    }
    var left = binaryTreePaths(root.left)
    var right = binaryTreePaths(root.right)


}

binaryTreePaths({
    val: 1,
    left: {
        val: 2,
        left: null,
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