/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function getSum(array, val) {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] > val) {
            count += array[i];
        }
    }
    return count;
}

var convertBST = function(root) {
    // 判断自家的 val 和 左右的关系
    var result = [];

    function traverse(root) {
        if (root) {
            result.push(root.val);
            traverse(root.left);
            traverse(root.right);
        }
    }

    traverse(root);

    function addNumber(root) {
        if (root) {
            root.val = root.val + getSum(result, root.val);
            addNumber(root.left);
            addNumber(root.right);
            return root;
        }
    }

    return addNumber(root);
};

convertBST({
    val: 5,
    left: {
        val: 2,
        left: null,
        right: null
    },
    right: {
        val: 13,
        left: null,
        right: null
    }
});
