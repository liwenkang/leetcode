/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    // 遍历出，然后重新构建一个 tree
    var result = [];

    function traverse(root) {
        if (root) {
            result.push(root.val);
            traverse(root.left);
            traverse(root.right);
        }
    }

    traverse(root);

    result = [...result, val].sort((a, b) => a - b);

    // 构建
    function sortedArrayToBST(result) {
        var midIndex = Math.floor(result.length / 2);
        var mid = result[midIndex];
        if (result.length === 0) {
            return null
        }
        var node = new TreeNode(mid);
        node.left = sortedArrayToBST(result.slice(0, midIndex));
        node.right = sortedArrayToBST(result.slice(midIndex + 1));
        return node;
    };

    return sortedArrayToBST(result);
};

