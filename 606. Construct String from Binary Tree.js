const log = console.log.bind(console);

var tree2str = function(t) {
    if (!t) {
        return '';
    }

    if (!t.left && !t.right) {
        return '' + t.val
    } else if (t.right) {
        return '' + t.val + `(${tree2str(t.left)})` + `(${tree2str(t.right)})`;
    } else {
        return '' + t.val + `(${tree2str(t.left)})`;
    }
};


console.log(tree2str({
    val: 1,
    left: {
        val: 2,
        left: null,
        right: {
            val: 4,
            left: null,
            right: null
        },
    },
    right: {
        val: 3,
        left: null,
        right: null
    }
}));
