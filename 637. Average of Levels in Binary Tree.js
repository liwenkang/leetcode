/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    // 一层一层的遍历（广度优先搜索）
    var stack = [];
    var data = [];

    stack.push(root);

    function sumArray(array) {
        var count = 0;
        for (var i = 0; i < array.length; i++) {
            count += array[i];
        }
        return count / array.length;
    }

    while (stack.length > 0) {
        var temp = [];
        var result = [];
        for (var i = 0; i < stack.length; i++) {
            var node = stack[i];
            result.push(node.val);
            if (node.left) {
                temp.push(node.left);
            }
            if (node.right) {
                temp.push(node.right);
            }
        }
        data.push(sumArray(result));
        stack = temp;
    }
    return data;
};

averageOfLevels({
    val: 3,
    left: {
        val: 9,
        left: {
            val: 1,
            left: null,
            right: null
        },
        right: null
    },
    right: {
        val: 20,
        left: {
            val: 15,
            left: null,
            right: null
        },
        right: {
            val: 7,
            left: null,
            right: null
        }
    }
});
