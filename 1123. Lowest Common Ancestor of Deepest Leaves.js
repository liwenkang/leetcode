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
 * @return {TreeNode}
 */
var lcaDeepestLeaves = function(root) {
    // 找到最深多少层
    var max = 0;
    var result;


    function findMaxDepth(root, depth) {
        if (!root) return;
        findMaxDepth(root.left, depth + 1);
        findMaxDepth(root.right, depth + 1);
        if (depth > max) {
            max = depth;
            result = root;
        }
    }

    findMaxDepth(root, 0);


    function findAncestor(root, depth) {
        if (!root) return;
        var left = findAncestor(root.left, depth + 1);
        var right = findAncestor(root.right, depth + 1);

        if (depth === max) return true;
        if (left && right) {
            // 说明
            result = root;
        }
        return left || right;
    }

    findAncestor(root, 0);
    return result;
};

lcaDeepestLeaves({
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4,
            left: null,
            right: null
        },
        right: null
    },
    right: {
        val: 3,
        left: null,
        right: null
    }
});
