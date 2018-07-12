const log = console.log.bind(console)


/**
 * @param {number[]} nums
 * @return {number}
 */
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
}

// removeDuplicates([1, 1, 1, 2, 2, 3])
removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3],)
