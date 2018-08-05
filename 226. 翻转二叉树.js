const log = console.log.bind(console)

var invertTree = function (root) {
    if (!root) {
        return null
    }
    var tmp = root.left
    root.left = root.right
    root.right = tmp
    invertTree(root.left)
    invertTree(root.right)
    return root
}