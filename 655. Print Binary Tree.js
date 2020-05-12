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
 * @return {string[][]}
 */

var formatString = function(array, midBlank, startBlank) {
    // 在每个字符串后面，加 number 个 ""
    for (var i = 1; i < array.length; i++) {
        array.splice(i, 0, ...Array(midBlank).fill(''));
        i += midBlank;
    }
    return [...Array(startBlank).fill(''), ...array, ...Array(startBlank).fill('')];
};

formatString([1, 2, 3], 2);

var printTree = function(root) {
    var result = [];
    var stack = [root];
    while (stack.length > 0) {
        var array = [];
        var nextStack = [];

        for (var i = 0; i < stack.length; i++) {
            if (stack[i].val === '') {
                array.push('');
            } else {
                array.push(stack[i].val.toString());
            }

            if (stack[i].left) {
                nextStack.push(stack[i].left);
            } else {
                nextStack.push({ val: '', left: null, right: null });
            }

            if (stack[i].right) {
                nextStack.push(stack[i].right);
            } else {
                nextStack.push({ val: '', left: null, right: null });
            }
        }
        if (array.every(item => item === '')) {
            break;
        }
        result.push(array);
        stack = nextStack;
    }
    // result 转换为需要的格式
    // 最后一行，在每个 cell 中间放一个 cell 进去
    for (var i = result.length - 1; i >= 0; i--) {
        var order = result.length - 1 - i;
        // 起始和结尾的空
        var startBlank = Math.pow(2, order) - 1;
        // 中间的空
        var midBlank = Math.pow(2, order + 1) - 1;
        result[i] = formatString(result[i], midBlank, startBlank);
    }
    return result;
};

printTree({
    val: 1,
    left: {
        val: 2,
        left: {
            val: 3,
            left: null,
            right: {
                val: 4,
                left: null,
                right: null
            },
        },
        right: null
    },
    right: {
        val: 5,
        left: null,
        right: null
    },
});
