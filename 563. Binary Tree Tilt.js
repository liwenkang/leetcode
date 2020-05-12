const log = console.log.bind(console);

var getSum = function(root) {
    // 返回节点的和
    var result = 0;

    function traverse(root) {
        if (root) {
            result += root.val;
            traverse(root.left);
            traverse(root.right);
        }
    }

    traverse(root);
    return result;
};

var findTilt = function(root) {
    var result = 0;

    function traverse(root) {
        if (root) {
            if (root.left && root.right) {
                result += Math.abs(getSum(root.left) - getSum(root.right));
            } else if (root.left) {
                result += Math.abs(getSum(root.left));
            } else if (root.right) {
                result += Math.abs(getSum(root.right));
            }
            traverse(root.left);
            traverse(root.right);
        }
    }

    traverse(root);
    return result;
};

findTilt({
    val: 1,
    left: {
        val: 2,
        left: null,
        right: null
    },
    right: {
        val: 3,
        left: null,
        right: null
    }
});
