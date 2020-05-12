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
// todo 效率过低
var getMaxPath = function(root) {
    var max = 0;
    if (!root) return max;

    function dfs(root, depth, flag) {
        if (!root) return;
        if (depth > max) {
            max = depth;
        }
        if (flag) {
            // 左边
            dfs(root.left, depth + 1, !flag);
        } else {
            dfs(root.right, depth + 1, !flag);
        }
    }

    dfs(root, 0, true);
    dfs(root, 0, false);
    return max;
};

var longestZigZag = function(root) {
    var max = 0;

    function dfs(root) {
        if (!root) return;
        var value = getMaxPath(root);
        dfs(root.left);
        dfs(root.right);
        if (value > max) {
            max = value;
        } else {
            return;
        }
    }

    dfs(root);
    return max;
};

// [1,null,1,1,1,null,null,1,1,null,1,null,null,null,1,null,1]
//
longestZigZag({
    val: 1,
    left: null,
    right: {
        val: 1,
        left: {
            val: 1,
            left: null,
            right: null
        },
        right: {
            val: 1,
            left: {
                val: 1,
                left: {
                    val: 1,
                    left: null,
                    right: {
                        val: 1,
                        left: null,
                        right: {
                            val: 1,
                            left: null,
                            right: null
                        },
                    },
                },
                right: null
            },
            right: {
                val: 1,
                left: null,
                right: null
            }
        },
    }
});

longestZigZag({
    val: 1,
    left: {
        val: 1,
        left: null,
        right: null
    },
    right: {
        val: 1,
        left: {
            val: 1,
            left: null,
            right: {
                val: 1,
                left: null,
                right: {
                    val: 1,
                    left: null,
                    right: {
                        val: 1,
                        left: null,
                        right: null
                    }
                }
            }
        },
        right: {
            val: 1,
            left: null,
            right: null
        }
    }
});
