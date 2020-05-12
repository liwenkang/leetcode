const log = console.log.bind(console);

var sumOfLeftLeaves = function(root) {
    var count = 0;

    function traverse(root) {
        if (root) {
            if (root.left && root.left.val) {
                if (root.left.left === null && root.left.right === null) {
                    count += root.left.val;
                }
            }
            traverse(root.left);
            traverse(root.right);
        }
    }

    traverse(root);
    return count
};


sumOfLeftLeaves({
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
        },
    },
    right: {
        val: 3,
        left: null,
        right: null
    }
});
