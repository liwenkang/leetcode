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
var findBottomLeftValue = function(root) {
    var result = [[root.val]];
    var stack = [root];
    while (stack.length > 0) {
        var t = [];
        var array = [];
        for (var i = 0; i < stack.length; i++) {
            var temp = stack[i];
            if (temp.left) {
                t.push(temp.left.val);
                array.push(temp.left);
            }
            if (temp.right) {
                t.push(temp.right.val);
                array.push(temp.right);
            }
        }
        if (t.length > 0) {
            result.push(t);
        }
        stack = array;
    }
    return result[result.length - 1][0];
};


findBottomLeftValue({
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
        left: {
            val: 5,
            left: {
                val: 7,
                left: null,
                right: null
            },
            right: null
        },
        right: {
            val: 6,
            left: null,
            right: null
        },
    }
});
