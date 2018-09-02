const log = console.log.bind(console)

function TreeNode(val) {
    this.val = val
    this.left = this.right = null
}

var flatten = function (root) {
    var result = []
    var helper = function (root) {
        if (root) {
            result.push(root.val)
            helper(root.left)
            helper(root.right)
        }
    }
    helper(root)

    // 将数组转换为只有右支的二叉树
    var getNode = function (result) {
        if (result.length > 1) {
            var node = new TreeNode(result[0])
            node.left = null
            node.right = getNode(result.slice(1))
            return node
        } else if (result.length === 1) {
            var node = new TreeNode(result[0])
            node.left = null
            node.right = null
            return node
        }
    }
    root = JSON.parse(JSON.stringify(getNode(result)))
    log(root)
}
/*
*     1
   / \
  2   5
 / \   \
3   4   6

*/

flatten({
    val: 1,
    left: {
        val: 2,
        left: {
            val: 3,
            left: null,
            right: null
        },
        right: {
            val: 4,
            left: null,
            right: null
        }
    },
    right: {
        val: 5,
        left: null,
        right: {
            val: 6,
            left: null,
            right: null
        }
    }
})