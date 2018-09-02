const log = console.log.bind(console)

function TreeNode(val) {
    this.val = val
    this.left = this.right = null
}

var buildTree = function (preorder, inorder) {
    // 根据前序遍历和中序遍历确定 二叉树
    var helper = function (preorder, inorder) {
        if (preorder.length === 0) {
            return null
        }
        var tree = new TreeNode(preorder[0])
        var index = inorder.indexOf(preorder[0])

        var leftInorder = inorder.slice(0, index)
        var leftPreorder = preorder.slice(1, 1 + leftInorder.length)
        tree.left = helper(leftPreorder, leftInorder)

        var rightInorder = inorder.slice(index + 1)
        var rightPreorder = preorder.slice(1 + leftInorder.length)
        tree.right = helper(rightPreorder, rightInorder)
        return tree
    }
    return helper(preorder, inorder)
}

buildTree([1, 2, 4, 5, 3, 6], [4, 2, 5, 1, 3, 6])