const log = console.log.bind(console)


var binaryTreePaths = function (root) {
    var result = []

    function f(root, str = "") {
        if (root) {
            if (root.left === null && root.right === null) {
                str += root.val
            }else {
                str += root.val + "->"
            }
            if (root.left === null && root.right === null) {
                result.push(str)
            }
            f(root.left, str)
            f(root.right, str)
        }
    }
    f(root)
    return result
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