/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxAncestorDiff = function(root) {
    var max = 0;

    function getMaxDiff(root, target) {
        var result = [];

        function dfs(root) {
            if (!root) return;
            result.push(root.val);
            dfs(root.left);
            dfs(root.right);
        }

        dfs(root);

        return Math.max(...result.map(value => Math.abs(value - target)));
    }

    function dfs(root) {
        if (!root) return;
        var diff1 = getMaxDiff(root.left, root.val);
        var diff2 = getMaxDiff(root.right, root.val);
        if (diff1 > max) {
            max = diff1;
        }
        if (diff2 > max) {
            max = diff2;
        }
        dfs(root.left);
        dfs(root.right);
    }

    dfs(root);
    return max;
};
