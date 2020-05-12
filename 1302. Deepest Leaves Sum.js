/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var deepestLeavesSum = function(root) {
    var result = [];
    var stack = [root];
    while (stack.length > 0) {
        var temp = [];
        var data = [];
        for (var i = 0; i < stack.length; i++) {
            temp.push(stack[i].val);

            if (stack[i].left) {
                data.push(stack[i].left);
            }

            if (stack[i].right) {
                data.push(stack[i].right);
            }
        }
        result.push(temp);
        stack = data;
    }
    var sumArray = result[result.length - 1];
    var count = 0;
    for (var i = 0; i < sumArray.length; i++) {
        count += sumArray[i];
    }
    return count;
};

deepestLeavesSum({
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4,
            left: {
                val: 7,
                left: null,
                right: null
            },
            right: null
        },
        right: {
            val: 5,
            left: null,
            right: null
        }
    },
    right: {
        val: 3,
        left: null,
        right: {
            val: 6,
            left: null,
            right: {
                val: 8,
                left: null,
                right: null
            }
        }
    }
});
