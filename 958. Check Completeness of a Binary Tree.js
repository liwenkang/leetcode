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
 * @return {boolean}
 */
function BFS(root) {
    var result = [];
    var stack = [root];
    while (stack.length > 0) {
        var nextStack = [];
        var array = [];
        for (var i = 0; i < stack.length; i++) {
            var item = stack[i];
            array.push(item.val);
            if (item.left) {
                nextStack.push(item.left);
            }
            if (item.right) {
                nextStack.push(item.right);
            }
        }
        result.push(array);
        stack = nextStack;
    }
    return result;
}

var isCompleteTree = function(root) {
    var BFSArray = BFS(root);

    // 除最后一行之外，都满
    for (var i = 0; i < BFSArray.length - 1; i++) {
        if (BFSArray[i].length !== Math.pow(2, i)) {
            return false;
        }
    }

    var count = 0;
    var result = [];
    var stack = [root];
    while (stack.length > 0) {
        var nextStack = [];
        var array = [];

        for (var i = 0; i < stack.length; i++) {
            var item = stack[i];
            array.push(item.val);
            // 到了最后一行了
            if (result.length === BFSArray.length - 2) {
                if (item.left && !item.right) {
                    // 可以出现一次
                    count++;
                    if (count === 2) {
                        return false;
                    }
                } else if (!item.left && item.right) {
                    // 不行
                    break;
                } else if (item.left && item.right) {
                    if (count >= 1) {
                        return false;
                    }
                } else if (!item.left && !item.right) {
                    count++
                    continue;
                }

                if (item.left) {
                    nextStack.push(item.left);
                }
                if (item.right) {
                    nextStack.push(item.right);
                }
            } else {
                if (item.left) {
                    nextStack.push(item.left);
                }
                if (item.right) {
                    nextStack.push(item.right);
                }
            }
        }
        result.push(array);
        stack = nextStack;
    }
    return JSON.stringify(BFSArray) === JSON.stringify(result);
};


// [1,2,3,4,5,6,7,
//     8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]
isCompleteTree({
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4,
            left: {
                val: 8,
                left: {
                    val: 16,
                    left: {
                        val: 32,
                        left: null,
                        right: null
                    },
                    right: {
                        val: 33,
                        left: null,
                        right: null
                    },
                },
                right: {
                    val: 17,
                    left: null,
                    right: null
                },
            },
            right: {
                val: 9,
                left: {
                    val: 18,
                    left: null,
                    right: null
                },
                right: {
                    val: 19,
                    left: null,
                    right: null
                },
            },
        },
        right: {
            val: 5,
            left: {
                val: 10,
                left: {
                    val: 20,
                    left: null,
                    right: null
                },
                right: {
                    val: 21,
                    left: null,
                    right: null
                },
            },
            right: {
                val: 11,
                left: {
                    val: 22,
                    left: null,
                    right: null
                },
                right: {
                    val: 23,
                    left: null,
                    right: null
                },
            },
        },
    },
    right: {
        val: 3,
        left: {
            val: 6,
            left: {
                val: 12,
                left: {
                    val: 24,
                    left: null,
                    right: null
                },
                right: {
                    val: 25,
                    left: null,
                    right: null
                },
            },
            right: {
                val: 13,
                left: {
                    val: 26,
                    left: null,
                    right: null
                },
                right: {
                    val: 27,
                    left: null,
                    right: null
                },
            },
        },
        right: {
            val: 7,
            left: {
                val: 14,
                left: {
                    val: 28,
                    left: null,
                    right: null
                },
                right: {
                    val: 29,
                    left: null,
                    right: null
                },
            },
            right: {
                val: 15,
                left: {
                    val: 30,
                    left: null,
                    right: null
                },
                right: {
                    val: 31,
                    left: null,
                    right: null
                },
            },
        }
    }
});
