const log = console.log.bind(console)

// In Order Traversal
function TreeNode(val) {
    this.val = val
    this.left = this.right = null
}

var sortedArrayToBST = function (nums) {
    if (nums.length === 0) {
        return null
    }
    var middle = Math.floor(nums.length / 2)
    var leftArr = nums.slice(0, middle)
    var rightArr = nums.slice(middle + 1)
    var root = new TreeNode(nums[middle])
    root.left = sortedArrayToBST(leftArr)
    root.right = sortedArrayToBST(rightArr)
    return root
}

sortedArrayToBST([-10, -3, 0, 5, 9])