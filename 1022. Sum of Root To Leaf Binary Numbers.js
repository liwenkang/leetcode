var sumRootToLeaf = function(root) {
    var result = [];

    function traverse(root, str) {
        if (root) {
            var string = str + root.val;
            if (!root.left && !root.right) {
                result.push(string);
            } else if (!root.left) {
                traverse(root.right, string);
            } else if (!root.right) {
                traverse(root.left, string);
            } else {
                traverse(root.left, string);
                traverse(root.right, string);
            }
        }
    }

    traverse(root, '');
    var count = 0
    result.forEach(val => {
        count += parseInt(val, 2)
    })
    return count
};

sumRootToLeaf({
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4,
            left: {
                val: 5,
                left: null,
                right: null
            },
            right: null
        },
        right: null
    },
    right: {
        val: 3,
        left: null,
        right: null
    },
});
