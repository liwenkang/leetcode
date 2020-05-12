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
 */
function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

// 将
var arrayToTree = function(array) {
    if (array.length === 0) {
        return null;
    }

    // 就是一层一层，然后缺的是 null
    var one = array.shift();
    var tree = new TreeNode(one);
    var nodeStack = [tree];
    while (array.length > 0) {
        var temp = nodeStack.shift();

        var nextLeftVal = array.shift();
        var nextLeft = null;
        if (nextLeftVal !== null) {
            nextLeft = new TreeNode(nextLeftVal);
            nodeStack.push(nextLeft);
        }
        temp.left = nextLeft;

        if (array.length !== 0) {
            var nextRightVal = array.shift();
            var nextRight = null;
            if (nextRightVal !== null) {
                nextRight = new TreeNode(nextRightVal);
                nodeStack.push(nextRight);
            }
            temp.right = nextRight;
        } else {
            break;
        }
    }
    return tree;
};

var treeToArray = function(root) {
    var result = [];
    var stack = [root];
    while (stack.length > 0) {
        var nextStack = [];
        for (var i = 0; i < stack.length; i++) {
            result.push(stack[i].val);
            if (stack[i].left) {
                nextStack.push(stack[i].left);
            }

            if (!stack[i].left && stack[i].right) {
                nextStack.push({ val: null });
            }

            if (stack[i].right) {
                nextStack.push(stack[i].right);
            }

            if (stack[i].left && !stack[i].right) {
                nextStack.push({ val: null });
            }
        }
        stack = nextStack;
    }
    while (result[result.length - 1] === null) {
        result.splice(result.length - 1, 1);
    }
    return result;
};


var findParentVal = function(root) {
    var result;

    function BFS(root) {
        var stack = [root];
        while (stack.length > 0) {
            var nextStack = [];
            for (var i = 0; i < stack.length; i++) {
                if (stack[i].left) {
                    nextStack.push(stack[i].left);
                    result = stack[i].val;
                }
                if (stack[i].right) {
                    nextStack.push(stack[i].right);
                    result = stack[i].val;
                }
            }
            stack = nextStack;
        }
    }

    BFS(root);
    return result
};

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
 */
var CBTInserter = function(root) {
    this.root = root;
};

/**
 * @param {number} v
 * @return {number}
 */

CBTInserter.prototype.insert = function(v) {
    var array = treeToArray(this.root);
    this.root = arrayToTree([...array, v]);
    return findParentVal(this.root, v);
};

/**
 * @return {TreeNode}
 */
CBTInserter.prototype.get_root = function() {
    return this.root;
};

/**
 * Your CBTInserter object will be instantiated and called as such:
 * var obj = new CBTInserter(root)
 * var param_1 = obj.insert(v)
 * var param_2 = obj.get_root()
 */


// var obj = new CBTInserter(arrayToTree([7,21,10,19,15,17,10,25,12,15,9,5,15,7,27,27,7,22,22,21]));
// console.log(obj.insert(0));
// console.log(treeToArray(obj.get_root()))


var obj = new CBTInserter(arrayToTree([7]));
console.log(obj.insert(0));
console.log(treeToArray(obj.get_root()))


// ["CBTInserter","insert","insert","insert","insert","insert","insert","insert","insert","insert","insert","insert","insert","insert","insert","insert","insert","insert","insert","insert","insert","get_root"]
//     [[],[0],[18],[17],[27],[23],[29],[13],[10],[28],[6],[0],[18],[22],[15],[22],[27],[1],[30],[4],[21],[]]
// [null,15,15,9,9,5,5,15,15,7,7,7,27,27,27,27,7,7,22,22,22, [7,21,10,19,15,17,10,25,12,15,9,5,15,7,27,27,7,22,22,21,18,17,27,23,29,13,10,28,6,18,22,15,22,27,1,30,4,21]]
// [null,15,9,9,5,5,15,15,7,7,27,27,27,27,7,7,22,22,22,22,21,[7,21,10,19,15,17,10,25,12,15,9,5,15,7,27,27,7,22,22,21,0,18,17,27,23,29,13,10,28,6,0,18,22,15,22,27,1,30,4,21]]


// ["CBTInserter","insert","insert","insert","insert","insert","insert","insert","insert","insert","insert","insert","insert","insert","insert","insert","insert","insert","insert","insert","insert","get_root"]
//     [[],[0],[18],[17],[27],[23],[29],[13],[10],[28],[6],[0],[18],[22],[15],[22],[27],[1],[30],[4],[21],[]]
