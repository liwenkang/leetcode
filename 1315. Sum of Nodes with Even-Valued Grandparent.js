var sumEvenGrandparent = function(root) {
    var result = 0;

    function traverse(root) {
        if (root) {
            if (root.val % 2 === 0) {
                if (root.left) {
                    if (root.left.left) {
                        result += root.left.left.val;
                    }

                    if (root.left.right) {
                        result += root.left.right.val;
                    }
                }

                if (root.right) {
                    if (root.right.left) {
                        result += root.right.left.val;
                    }

                    if (root.right.right) {
                        result += root.right.right.val;
                    }
                }
            }
            traverse(root.left);
            traverse(root.right);
        }
    }

    traverse(root);
    return result;
};

sumEvenGrandparent({
    val: 6,
    left: {
        val: 7,
        left: {
            val: 2,
            left: {
                val: 9,
                left: null,
                right: null
            },
            right: null
        },
        right: {
            val: 7,
            left: {
                val: 1,
                left: null,
                right: null
            },
            right: {
                val: 4,
                left: null,
                right: null
            }
        }
    },
    right: {
        val: 8,
        left: {
            val: 1,
            left: null,
            right: null
        },
        right: {
            val: 3,
            left: null,
            right: {
                val: 5,
                left: null,
                right: null
            }
        }
    }
});
