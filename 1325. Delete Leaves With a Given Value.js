/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {TreeNode}
 */
var removeLeafNodes = function(root, target) {
    var flag = false;

    function dfs(root) {
        if (!root) return;
        var left = dfs(root.left);
        var right = dfs(root.right);
        if (left) {
            flag = true;
            root.left = null;
        }
        if (right) {
            flag = true;
            root.right = null;
        }
        if (!root.left && !root.right) {
            return root.val === target;
        }
    }
    dfs(root)
    if (root.val === target && !root.left && !root.right) {
        return null
    }
    return root;
};

// removeLeafNodes({
//     val: 1,
//     left: {
//         val: 2,
//         left: {
//             val: 3,
//             left: null,
//             right: null
//         },
//         right: null
//     },
//     right: {
//         val: 3,
//         left: {
//             val: 2,
//             left: null,
//             right: null
//         },
//         right: {
//             val: 4,
//             left: null,
//             right: null
//         }
//     }
// }, 2);

removeLeafNodes({
    val: 1,
    left: {
        val: 1,
        left: null,
        right: null
    },
    right: {
        val: 1,
        left: null,
        right: null
    }
}, 1);
