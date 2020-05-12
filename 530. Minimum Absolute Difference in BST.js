const log = console.log.bind(console);

var getMinimumDifference = function(root) {
    var result = [];

    function traverse(root) {
        if (root) {
            result.push(root.val);
            traverse(root.left);
            traverse(root.right);
        }
    }

    traverse(root);
    var min = Infinity;
    for (var i = 0; i < result.length; i++) {
        for (var j = i + 1; j < result.length; j++) {
            var val = Math.abs(result[i] - result[j]);
            if (val < min) {
                min = val;
            }
        }
    }
    return min;
};

getMinimumDifference({
    val: 1,
    left: null,
    right: {
        val: 3,
        left: {
            val: 2,
            left: null,
            right: null
        },
        right: null
    }
});
