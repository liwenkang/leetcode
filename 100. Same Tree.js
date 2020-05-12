const log = console.log.bind(console);

var isSameTree = function(p, q) {
    var flag = true;

    function traverse(root1, root2) {
        if (root1 && root2) {
            if (root1.val !== root2.val) {
                flag = false;
            }
            traverse(root1.left, root2.left);
            traverse(root1.right, root2.right);
        } else if (!root1 && !root2) {

        } else {
            flag = false;
        }
    }

    traverse(p, q)

    return flag
};

isSameTree({
        val: 1,
        left: {
            val: 2,
            left: null,
            right: null
        },
        right: {
            val: 3,
            left: null,
            right: null
        },
    },
    {
        val: 1,
        right: {
            val: 2,
            left: null,
            right: null
        },
        left: {
            val: 3,
            left: null,
            right: null
        },
    });
