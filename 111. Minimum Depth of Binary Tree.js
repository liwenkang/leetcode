var minDepth = function(root) {
    var result = [0];

    const dfs = function(root, test) {
        if (root) {
            let temp = [...test, root.val];
            if (!root.left && !root.right) {
                result.push(temp.length);
            }
            dfs(root.left, temp);
            dfs(root.right, temp);
        }
    };

    dfs(root, []);

    console.log(result);
    return Math.min(...result);
};

minDepth({
    val: 3,
    left: {
        val: 9,
        left: null,
        right: null
    },
    right: {
        val: 20,
        left: {
            val: 15,
            left: null,
            right: null
        },
        right: {
            val: 7,
            left: null,
            right: null
        },
    }
});
