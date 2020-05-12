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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    // 使用迭代的方法获取后续
    if (!root) return [];
    const res = [], stack = [root];
    let curr = null;

    while (stack.length > 0) {
        // 从后面拿
        curr = stack.pop();
        if (!curr) continue;
        res.push(curr.val);
        stack.push(curr.left);
        stack.push(curr.right);
    }
    console.log(res.reverse());
};

postorderTraversal({
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4,
            left: null,
            right: null
        },
        right: {
            val: 5,
            left: null,
            right: null
        },
    },
    right: {
        val: 3,
        left: {
            val: 6,
            left: null,
            right: null
        },
        right: {
            val: 7,
            left: null,
            right: null
        },
    },
});
