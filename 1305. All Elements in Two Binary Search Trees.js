/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
    var result = [];

    function traverse(root) {
        if (root) {
            result.push(root.val);
            traverse(root.left);
            traverse(root.right);
        }
    }

    traverse(root1);
    traverse(root2);
    return result.sort((a, b) => a - b);
};
