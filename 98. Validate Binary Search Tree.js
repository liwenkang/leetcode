const log = console.log.bind(console);

function getArray(root, target, allSmall) {
    var result = [];

    function dfs(root) {
        if (!root) return;
        result.push(root.val);
        dfs(root.left);
        dfs(root.right);
    }

    dfs(root);

    if (allSmall) {
        return result.every(item => item < target);
    } else {
        return result.every(item => item > target);
    }
}

var isValidBST = function(root) {
    var flag = true;

    function dfs(root) {
        if (!root) return;
        if (root.left) {
            if (root.left.val >= root.val) {
                flag = false;
            }

            if (!getArray(root.left, root.val, true)) {
                flag = false;
            }
        }

        if (root.right) {
            if (root.right.val <= root.val) {
                flag = false;
            }

            if (!getArray(root.right, root.val, false)) {
                flag = false;
            }
        }
        dfs(root.left);
        dfs(root.right);
    }

    dfs(root);
    return flag;
};

// [10,5,15,null,null,6,20]
isValidBST({
    val: 10,
    left: {
        val: 5,
        left: null,
        right: null
    },
    right: {
        val: 15,
        left: {
            val: 6,
            left: null,
            right: null
        },
        right: {
            val: 20,
            left: null,
            right: null
        }
    }
});
