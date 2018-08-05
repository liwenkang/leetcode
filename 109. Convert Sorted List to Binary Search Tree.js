const log = console.log.bind(console)

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

var sortedListToBST = function (head) {
    // 1. 转为数组
    var arr = []
    while (head) {
        arr.push(head.val)
        head = head.next
    }

    // 2. 排序
    arr.sort(function (a, b) {
        return a - b
    })

    // 3. 转为二分查找树
    return sortedArrayToBST(arr)
}