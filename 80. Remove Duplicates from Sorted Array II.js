var removeDuplicates = function (nums) {
    // 有重复次数超过两次的,就删掉两次之后的
    for (var i = 0; i < nums.length; i++) {
        var item = nums[i]
        var startIndex = i
        var lastIndex = nums.lastIndexOf(item)
        var deleteLength = lastIndex - startIndex - 1
        if (deleteLength >= 1) {
            nums.splice(i + 2, deleteLength)
            i++
        }
        if (deleteLength === 0) {
            i++
        }
    }
};