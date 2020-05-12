/**
 * Definition for a binary tree node.

 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

var constructMaximumBinaryTree = function(nums) {
    // 构建树
    if (nums.length === 0) {
        return null;
    }
    var max = Math.max(...nums);
    var maxIndex = nums.indexOf(max);
    var leftNums = nums.slice(0, maxIndex);
    var rightNums = nums.slice(maxIndex + 1);

    var node = new TreeNode(max);
    node.left = constructMaximumBinaryTree(leftNums);
    node.right = constructMaximumBinaryTree(rightNums);

    return node;
};

console.log(constructMaximumBinaryTree([3, 2, 1, 6, 0, 5]));
