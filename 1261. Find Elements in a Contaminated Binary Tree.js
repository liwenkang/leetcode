/**
 * Definition for a binary tree node.

 */
/**
 * @param {TreeNode} root
 */

function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

var FindElements = function(root) {
    // 先转换
    var myRoot = new TreeNode(0);
    var result = new Set([0])
    function dfs(root, myRoot) {
        if (!root) return;
        var x = myRoot.val;
        if (root.left) {
            result.add(2 * x + 1)
            myRoot.left = new TreeNode(2 * x + 1);
        }
        if (root.right) {
            result.add(2 * x + 2)
            myRoot.right = new TreeNode(2 * x + 2);
        }
        dfs(root.left, myRoot.left);
        dfs(root.right, myRoot.right);
    }

    dfs(root, myRoot);
    this.root = result;
    return null;
};

/**
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function(target) {
    return this.result.find(target)
};

/**
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */

var obj = new FindElements({
    val: -1,
    left: {
        val: -1,
        left: {
            val: -1,
            left: null,
            right: null
        },
        right: {
            val: -1,
            left: null,
            right: null
        }
    },
    right: {
        val: -1,
        left: null,
        right: null
    }
});
var param_1 = obj.find(1);
