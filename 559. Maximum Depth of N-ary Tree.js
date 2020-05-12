/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root) {
    // 最大层数
    var result = [];

    function traverse(root, val) {
        if (root) {
            if (root.children.length > 0) {
                for (var i = 0; i < root.children.length; i++) {
                    traverse(root.children[i], val + 1);
                }
            } else {
                result.push(val);
            }
        } else {
            result.push(val);
        }
    }

    if (root) {
        traverse(root, 1)
        return Math.max(...result)
    } else {
        return 0
    }
};

maxDepth({
    val: 1,
    children: [{
        val: 3,
        children: [
            {
                val: 5,
                children: null
            },
            {
                val: 6,
                children: null
            }
        ]
    }, {
        val: 2,
        children: null
    }, {
        val: 4,
        children: null
    }]
});
