/**
 * Definition for a binary tree node.

 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

var increasingBST = function(root) {
    var result = [];

    function traverse(root) {
        if (root) {
            result.push(root.val);
            traverse(root.left);
            traverse(root.right);
        }
    }

    traverse(root);
    // 数组全了
    result = result.sort((a, b) => a - b);

    if (result.length >= 1) {
        var dict = {
            node1: new TreeNode(result[0])
        };
        // 构建一个树
        for (var i = 1; i < result.length; i++) {
            var endString = 'node' + (i + 1);
            var beforeString = 'node' + i;
            dict[endString] = new TreeNode(result[i]);
            dict[beforeString].right = dict[endString];
        }
        return dict['node1'];
    } else {
        return null;
    }
};

increasingBST({
    val: 5,
    left: {
        val: 3,
        left: {
            val: 2,
            left: {
                val: 1,
                left: null,
                right: null
            },
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
            val: 8,
            left: {
                val: 7,
                left: null,
                right: null
            },
            right: {
                val: 9,
                left: null,
                right: null
            }
        }
    }
});
