/**
 * Definition for a binary tree node.

 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

const bstFromPreorder = function(preorder) {
    function f(array) {
        if (array.length === 0) {
            return null;
        }
        var val = array[0];
        var leftArray = [];
        var rightArray = [];
        for (var i = 1; i < array.length; i++) {
            if (array[i] < val) {
                leftArray.push(array[i]);
            } else {
                rightArray.push(array[i]);
            }
        }
        var node = new TreeNode(val);
        node.left = f(leftArray);
        node.right = f(rightArray);
        return node;
    }

    return f(preorder);
};

bstFromPreorder([8, 5, 1, 7, 10, 12]);

