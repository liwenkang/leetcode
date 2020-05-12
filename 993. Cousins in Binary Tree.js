/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    // 相同深度，不同父
    var depthX;
    var parentX;

    var depthY;
    var parentY;


    function traverse(root, depth) {
        if (root) {
            if (root.left && root.left.val === x) {
                // 记录它的深度和父
                depthX = depth;
                parentX = root.val;
            }
            if (root.right && root.right.val === x) {
                // 记录它的深度和父
                depthX = depth;
                parentX = root.val;
            }
            if (root.left && root.left.val === y) {
                // 记录它的深度和父
                depthY = depth;
                parentY = root.val;
            }
            if (root.right && root.right.val === y) {
                // 记录它的深度和父
                depthY = depth;
                parentY = root.val;
            }
            traverse(root.left, depth + 1);
            traverse(root.right, depth + 1);
        }
    }

    traverse(root, 1);
    if (depthX === depthY) {
        if (parentX !== parentY) {
            return true;
        }
    }
    return false;
};

isCousins({
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4,
            left: null,
            right: null
        },
        right: null
    },
    right: {
        val: 3,
        left: null,
        right: null
    }
}, 4, 3);
