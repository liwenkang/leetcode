/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function(root) {
    var result = [];
    var prev = null;
    var count = 0;
    var max = 0;

    function traverse(root) {
        if (root) {
            traverse(root.left);

            if (prev && root.val === prev.val) {
                count++;
            } else {
                count = 1;
            }

            if (count > max) {
                result = [root.val];
                max = count;
            } else if (count === max) {
                result.push(root.val);
            }
            prev = root;

            traverse(root.right);
        }
    }

    traverse(root);
    return result
};

findMode({
    val: 1,
    left: null,
    right: null
})
