const log = console.log.bind(console);

var minDiffInBST = function(root) {
    var min = Infinity;
    var prev = Infinity;

    function getMin(root) {
        if (!root) {
            return;
        }
        getMin(root.left);
        // 有点神奇
        const diff = Math.abs(prev - root.val);
        if (diff < min) {
            min = diff;
        }
        prev = root.val;
        getMin(root.right);
    }

    getMin(root);
    console.log('min', min);
    return min;
};

minDiffInBST({
    val: 5,
    left: {
        val: 4,
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
    },
    right: {
        val: 6,
        left: null,
        right: null
    }
});
