const log = console.log.bind(console);

var diameterOfBinaryTree = function(root) {
    var result = 0;

    function traverse(root) {
        if (!root) {
            return 0;
        }
        var left = traverse(root.left);
        var right = traverse(root.right);
        result = Math.max(left + right, result);
        return 1 + Math.max(left, right);
    }

    traverse(root);
    return result
};

diameterOfBinaryTree({
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4,
            left: null,
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
        right: null
    }
});
