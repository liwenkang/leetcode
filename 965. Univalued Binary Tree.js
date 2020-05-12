/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function(root) {
    // 全是相同的
    var flag = true;
    var val = root.val;

    function traverse(root) {
        if (root) {
            if (root.val !== val) {
                flag = false;
            }
            traverse(root.left);
            traverse(root.right);
        }
    }

    traverse(root);
    return flag;
};

