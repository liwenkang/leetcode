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
var subtreeWithAllDeepest = function(root) {
    // 找到最深的那部分
    // 找到他们的公共部分？
    // 一直往上找
    function BFS(root) {
        var stack = [root];
        var depth = 0;
        while (stack.length > 0) {
            var nextStack = [];
            for (var i = 0; i < stack.length; i++) {
                if (stack[i].left) {
                    nextStack.push(stack[i].left);
                }
                if (stack[i].right) {
                    nextStack.push(stack[i].right);
                }
            }
            depth++;
            stack = nextStack;
        }
        return depth;
    }

    var maxDepth = BFS(root);

    var result;

    function DFS(root, depth = 0) {
        var left = root.left ? DFS(root.left, depth + 1) : depth;
        var right = root.right ? DFS(root.right, depth + 1) : depth;

        if (left === maxDepth - 1 && right === maxDepth - 1) {
            result = root;
        }
        return Math.max(left, right)
    }

    DFS(root);
    return result
};

subtreeWithAllDeepest({
    val: 3,
    left: {
        val: 5,
        left: {
            val: 6,
            left: null,
            right: null
        },
        right: {
            val: 2,
            left: {
                val: 7,
                left: null,
                right: null
            },
            right: {
                val: 4,
                left: null,
                right: null
            }
        }
    },
    right: {
        val: 1,
        left: {
            val: 0,
            left: null,
            right: null
        },
        right: {
            val: 8,
            left: null,
            right: null
        }
    }
});
