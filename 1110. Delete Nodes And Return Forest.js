/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function(root, to_delete) {
    var stack = [[root, true]];
    var result = [];

    while (stack.length) {
        var [curr, noParent] = stack.shift();
        var shouldDelete = to_delete.includes(curr.val);
        if (!shouldDelete && noParent) {
            // 如果自身节点不该被删，而且没有父节点了
            result.push(curr);
        }

        if (curr.left) {
            stack.push([curr.left, shouldDelete]);
            if (to_delete.includes(curr.left.val)) {
                curr.left = null;
            }
        }

        if (curr.right) {
            stack.push([curr.right, shouldDelete]);
            if (to_delete.includes(curr.right.val)) {
                curr.right = null;
            }
        }
    }
    return result;
};
