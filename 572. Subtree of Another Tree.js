const log = console.log.bind(console);

var isSame = function(root1, root2) {
    var flag = true;

    function traverse(root1, root2) {
        if (root1 && root2) {
            if (root1.val !== root2.val) {
                flag = false;
                return;
            }

            traverse(root1.left, root2.left);
            traverse(root1.right, root2.right);
        } else if (!root1 && !root2) {
        } else {
            flag = false;
            return;
        }
    }

    traverse(root1, root2);
    return flag;
};

var isSubtree = function(s, t) {
    // 两个的 val 相同之后，继续往下判断
    var maybeResult = [];

    function traverse(root) {
        if (root) {
            if (root.val === t.val) {
                maybeResult.push(root);
            }
            traverse(root.left);
            traverse(root.right);
        }
    }

    traverse(s);

    for (var i = 0; i < maybeResult.length; i++) {
        if (isSame(maybeResult[i], t)) {
            return true;
        }
    }
    return false;
};
//
isSubtree({
        val: 3,
        left: {
            val: 4,
            left: {
                val: 1,
                left: null,
                right: null
            },
            right: {
                val: 2,
                left: null,
                right: null
            },
        },
        right: {
            val: 5,
            left: null,
            right: null
        },
    },
    {
        val: 4,
        left: {
            val: 1,
            left: null,
            right: null
        },
        right: {
            val: 2,
            left: null,
            right: null
        },
    }
);
