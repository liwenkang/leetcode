const log = console.log.bind(console)

var buildTree = function (inorder, postorder) {
    // 根据前序遍历和中序遍历确定 二叉树
    var helper = function (inorder, postorder) {
        if (inorder.length === 0) {
            return null
        }
        var tree = new TreeNode(postorder[postorder.length - 1])
        var index = inorder.indexOf(postorder[postorder.length - 1])

        var leftInorder = inorder.slice(0, index)
        var leftPostorder = postorder.slice(0, leftInorder.length)
        tree.left = helper(leftInorder, leftPostorder)

        var rightInorder = inorder.slice(index + 1)
        var rightPostorder = postorder.slice(leftInorder.length, postorder.length - 1)
        tree.right = helper(rightInorder, rightPostorder)
        return tree
    }
    return helper(inorder, postorder)
}