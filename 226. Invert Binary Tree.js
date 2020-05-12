var invertTree = function(root) {
    function traverse(root) {
        if (root) {
            var temp = root.left;
            root.left = root.right;
            root.right = temp;
            traverse(root.left);
            traverse(root.right);
            return root;
        }
    }
    return traverse(root)
};

invertTree({
    val: 4,
    left: {
        val: 2,
        left: {
            val: 1,
            left: null,
            right: null
        },
        right: {
            val: 3,
            left: null,
            right: null
        }
    },
    right: {
        val: 7,
        left: {
            val: 6,
            left: null,
            right: null
        },
        right: {
            val: 9,
            left: null,
            right: null
        }
    },
});
