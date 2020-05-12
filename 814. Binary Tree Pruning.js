/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var pruneTree = function(root) {
    function dfs(root) {
        if (!root) {
            return null;
        }
        root.left = dfs(root.left);
        root.right = dfs(root.right);
        if (!root.left && !root.right && root.val === 0) {
            return null;
        }
        return root
    }
};

pruneTree({
    val: 1,
    left: null,
    right: {
        val: 0,
        left: {
            val: 0,
            left: null,
            right: null
        },
        right: {
            val: 1,
            left: null,
            right: null
        }
    }
});
