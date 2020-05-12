const log = console.log.bind(console);


var binaryTreePaths = function(root) {
    var result = [];

    function f(root, str) {
        if (root) {
            if (root.left) {
                f(root.left, str + root.val + '->');
            }

            if (root.right) {
                f(root.right, str + root.val + '->');
            }

            if (!root.left && !root.right) {
                result.push(str + root.val);
            }
        }
    }

    f(root, '');
    return result;
};

binaryTreePaths({
    val: 1,
    left: {
        val: 2,
        left: null,
        right: {
            val: 5,
            left: null,
            right: null
        }
    },
    right: {
        val: 3,
        left: null,
        right: null
    }
});
