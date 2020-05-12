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
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    var result1 = [];
    var result2 = [];

    function traverse2(root) {
        if (root) {
            if (!root.left && !root.right) {
                result2.push(root.val);
            }
            traverse2(root.left);
            traverse2(root.right);
        }
    }

    function traverse1(root) {
        if (root) {
            if (!root.left && !root.right) {
                result1.push(root.val);
            }
            traverse1(root.left);
            traverse1(root.right);
        }
    }

    traverse1(root1);
    traverse2(root2);
    return JSON.stringify(result1) === JSON.stringify(result2)
};
