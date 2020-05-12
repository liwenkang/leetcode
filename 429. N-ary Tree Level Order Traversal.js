/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) {
        return [];
    }
    var stack = [root];
    var result = [[root.val]];
    while (stack.length > 0) {
        var my = [];
        var nextStack = [];
        for (var i = 0; i < stack.length; i++) {
            var temp = stack[i];
            for (var j = 0; j < temp.children.length; j++) {
                my.push(temp.children[j].val);
                nextStack.push(temp.children[j]);
            }
        }
        if (my.length > 0) {
            result.push(my);
        }
        stack = nextStack;
    }
    return result;
};

levelOrder({
    val: 1,
    children: [
        {
            val: 2,
            children: []
        },
        {
            val: 3,
            children: [
                {
                    val: 6,
                    children: []
                },
                {
                    val: 7,
                    children: [
                        {
                            val: 11,
                            children: [
                                {
                                    val: 14,
                                    children: []
                                }
                            ]
                        },

                    ]
                }
            ]
        },
        {
            val: 4,
            children: [
                {
                    val: 8,
                    children: [
                        {
                            val: 12,
                            children: []
                        },
                    ]
                },
            ]
        },
        {
            val: 5,
            children: [
                {
                    val: 9,
                    children: [
                        {
                            val: 13,
                            children: []
                        },
                    ]
                },
                {
                    val: 10,
                    children: []
                }
            ]
        }
    ]
});
