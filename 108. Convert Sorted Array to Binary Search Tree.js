function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

var sortedArrayToBST = function(nums) {
    var midIndex = Math.floor(nums.length / 2);
    var mid = nums[midIndex];
    if (nums.length === 0) {
        return null
    }
    var node = new TreeNode(mid);
    node.left = sortedArrayToBST(nums.slice(0, midIndex));
    node.right = sortedArrayToBST(nums.slice(midIndex + 1));
    return node;
};

console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));
