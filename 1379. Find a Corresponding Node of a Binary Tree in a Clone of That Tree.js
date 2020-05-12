/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function(original, cloned, target) {
    var result = null
    function traverse(root) {
        if (root) {
            if (root.val === target.val) {
                result = root
            }
            traverse(root.left)
            traverse(root.right)
        }
    }
    traverse(cloned);
    return result
};
