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

var bfsTree = function(root) {
    var stack = [root];
    var result = [];
    while (stack.length > 0) {
        var nextStack = [];
        var array = [];
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
    return result;
};

var findTargetRoot = function(root, target) {
    var result;

    function bfs(root) {
        if (!root) return;
        if (root.val === target.val) {
            result = root;
            return;
        }
        bfs(root.left);
        bfs(root.right);
    }

    bfs(root);
    return result;
};

var getDownValue = function(root, downDepth) {
    var result = [];

    function bfs(root, depth) {
        if (!root) return;
        if (depth === downDepth) {
            result.push(root.val);
        }
        bfs(root.left, depth + 1);
        bfs(root.right, depth + 1);
    }

    bfs(root, 0);
    return result;
};

var distanceK = function(root, target, K) {
    var depth = bfsTree(root);
    var result = [];

    var targetDepth = depth.map(item => item.some(it => it === target.val)).indexOf(true);
    // 找到 depth 是 targetDepth + K 的, 也就是往下查找
    if (targetDepth + K <= depth.length) {
        var targetRoot = findTargetRoot(root, target);
        result.push(...getDownValue(targetRoot, K));
    }

    // 找到 depth 是 targetDepth - K 的
    if (targetDepth - K >= 0) {
        // 直接往上
    } else {
        // 通过 root 再查
    }
};

distanceK(arrayToTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]), { val: 5, left: null, right: null }, 2);
