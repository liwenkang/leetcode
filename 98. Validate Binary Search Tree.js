const log = console.log.bind(console)

var isValidBST = function (root) {
    var flag = true
    var helper = function (root) {
        if (root) {
            if (root.left) {
                if (root.left.val >= root.val) {
                    flag = false
                }
            }
            if (root.right) {
                if (root.right.val <= root.val) {
                    flag = false
                }
            }
            helper(root.left)
            helper(root.right)
        }
    }
    helper(root)
    return flag
}