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
var largestValues = function(root) {
    if (!root) return [];
    var result = [];
    var stack = [root];
    while (stack.length > 0) {
        var array = [];
        var nextStack = [];
        for (var i = 0; i < stack.length; i++) {
            array.push(stack[i].val);
            if (stack[i].left) {
                nextStack.push(stack[i].left);
            }
            if (stack[i].right) {
                nextStack.push(stack[i].right);
            }
        }
        result.push(array);
        stack = nextStack;
    }
    return result.map(item => Math.max(...item));
};

largestValues({
    val: 1,
    left: {
        val: 3,
        left: {
            val: 5,
            left: null,
            right: null
        },
        right: {
            val: 3,
            left: null,
            right: null
        }
    },
    right: {
        val: 2,
        left: null,
        right: {
            val: 9,
            left: null,
            right: null
        }
    }
});
