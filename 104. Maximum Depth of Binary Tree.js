/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    var result = []
    function traverse(root, val) {
        if (root) {
            traverse(root.left, val + 1)
            traverse(root.right, val + 1)
        } else {
            result.push(val)
        }
    }

    traverse(root, 1)
    return Math.max(...result)
};
