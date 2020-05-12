/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function (root, L, R) {
    // 遍历 root
    var result = 0;

// 深度优先递归遍历树
    function traverse(root) {
        if (root) {
            if (root.val >= L && root.val <= R) {
                result += root.val;
            }
            traverse(root.left);
            traverse(root.right);
        }
    }

    traverse(root);

    return result;
};


traverse({
    val: 1,
    left: {
        val: '2-1',
        left: {
            val: '2-1-1',
            left: null,
            right: null
        },
        right: {
            val: '2-1-2',
            left: null,
            right: null
        },
    },
    right: {
        val: '2-2',
        left: {
            val: '2-2-1',
            left: null,
            right: null
        },
        right: {
            val: '2-2-2',
            left: null,
            right: null
        },
    }
});
