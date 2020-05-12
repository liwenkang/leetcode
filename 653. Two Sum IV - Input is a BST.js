const log = console.log.bind(console);

var findTarget = function(root, k) {
    var array = [];

    function traverse(root) {
        if (root) {
            array.push(root.val);
            traverse(root.left);
            traverse(root.right);
        }
    }

    traverse(root);

    for (var i = 0; i < array.length; i++) {
        for (var j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === k) {
                return true
            }
        }
    }

    return false
};

findTarget({
    val: 5,
    left: {
        val: 3,
        left: {
            val: 2,
            left: null,
            right: null
        },
        right: {
            val: 4,
            left: null,
            right: null
        }
    },
    right: {
        val: 6,
        left: null,
        right: {
            val: 7,
            left: null,
            right: null
        }
    },
});
