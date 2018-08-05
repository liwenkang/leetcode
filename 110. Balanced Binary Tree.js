const log = console.log.bind(console)

var getDepth = function (root) {
    if (root === null) {
        return 0
    }
    return 1 + Math.max(getDepth(root.left), getDepth(root.right))
}

var isBalanced = function (root) {
    if (root === null) {
        return true
    }
    var left = getDepth(root.left)
    var right = getDepth(root.right)

    return Math.abs(left - right) <= 1 && isBalanced(root.left) && isBalanced(root.right)
}