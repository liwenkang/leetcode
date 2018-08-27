const log = console.log.bind(console)

// 1,2,3 → 1,3,2
// 3,2,1 → 1,2,3
// 1,1,5 → 1,5,1

var swap = function (array, i, j) {
    var tmp = array[i]
    array[i] = array[j]
    array[j] = tmp
}
var reverseSort = function (num, start, end) {
    if (start > end) {
        return
    }
    for (var i = start; i <= (end + start) / 2; i++) {
        swap(num, i, start + end - i)
    }
}
var nextPermutation = function (nums) {
    var n = nums.length
    if (n < 2) {
        // 长度为 1/0 直接返回
        return
    }

    var index = nums.length - 1

    // [2, 3, 1]
    // index=2
    // 倒着寻找,找到第一个比前一个字母大的 index
    while (index > 0) {
        if (nums[index - 1] < nums[index]) {
            break
        }
        index--
    }

    // 确定了要交换的两位中的
    // 第二位的 index
    // 此时 nums[index - 1] < nums[index]

    // index = 1
    if (index === 0) {
        // 如果 index = 0 ,说明 nums 的数组是降序排列的,也就是说直接改为升序排列就可以了
        reverseSort(nums, 0, n - 1)
    } else {
        // 如果 index > 0, 说明存在 nums[index - 1] < nums[index]
        // 确定了要交换的两位中的
        // 第一位的 index
        // val = nums[index - 1]
        var val = nums[index - 1]

        // j 是 nums 最后一位的 index
        var j = n - 1   // 最后一位的 index 2

        // 找到 nums[index - 1] < nums[j]

        // 比如对于 [2,3,3,3,3]
        // 我的 index 为 1
        // index - 1 为 0  nums[index - 1] < nums[index]
        // 所以要倒着找到第一个比 2 大的 3
        while (j >= index) { //
            if (nums[j] > val) {
                break
            }
            j--
        }

        // 这个时候, 就是需要 j 和 index - 1 交换的时候了
        // log(j)
        // log(index - 1)
        log("swap 之前 nums", nums)
        swap(nums, j, index - 1)

        // 交换之后
        log("sort 之前 nums", nums)

        log(j, index)

        // log("最终 nums", nums)
        reverseSort(nums, index, n - 1)
        log("sort 之前 nums", nums)
    }
}


// nextPermutation([1, 2, 3]) // 1,3,2
// nextPermutation([2, 3, 3, 3, 3]) // 1,3,2
// nextPermutation([3, 2, 1]) // 1,2,3
// nextPermutation([1, 1, 5]) // 1,5,1
// nextPermutation([1, 3, 2]) // [2,1,3]
nextPermutation([2, 3, 1]) // [3,1,2]