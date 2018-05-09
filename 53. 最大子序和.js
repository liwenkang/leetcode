var log = console.log.bind(console)

/**
 * @param {number[]} nums
 * @return {number}
 */
var getSliceNums = function (arr) {
    var firstIndex = 0
    var lastIndex = arr.length - 1
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            firstIndex = i
            break
        }
    }

    for (var j = arr.length - 1; j >= 0; j--) {
        if (arr[j] > 0) {
            lastIndex = j
            break
        }
    }
    arr = arr.slice(firstIndex, lastIndex + 1)
    return arr
}

var getMergeInt = function (arr) {
    // 将相邻的正数合并
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] >= 0) {
            if (arr[i + 1] >= 0) {
                arr[i] = parseInt(arr[i] + arr[i + 1])
                arr = arr.slice(0, i + 1).concat(arr.slice(i + 2))
                i--
            }
        }
    }
    // 将相邻的负数数合并
    for (var j = 0; j < arr.length - 1; j++) {
        if (arr[j] <= 0) {
            if (arr[j + 1] <= 0) {
                arr[j] = parseInt(arr[j] + arr[j + 1])
                arr = arr.slice(0, j + 1).concat(arr.slice(j + 2))
                j--
            }
        }
    }
    return arr
}

var getMaxNum = function (arr) {
    // log('getMaxNum arr', arr)
    var maxNum = arr[0]
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > maxNum) {
            maxNum = arr[i]
            // log('i',i)
        }
    }
    return maxNum
}

var sumArr = function (arr) {
    var sum = 0
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}

var getMerge = function (nums) {
    for (let i = 0; i < nums.length; i += 2) {
        let arrIndex = [i, i + 2]
        let arrNum = nums.slice(arrIndex[0], arrIndex[1] + 1)
        let sum = sumArr(arrNum)
        if (sum > arrNum[0] && sum > arrNum[arrNum.length - 1]) {
            // 将数组进行切割
            nums[i] = sum
            nums = nums.slice(0, arrIndex[0] + 1).concat(nums.slice(arrIndex[0] + 3))
            i -= 2
        }
    }
    return nums
}

var maxSubArray = function (nums) {
    var maxNum = getMaxNum(nums)
    if (maxNum <= 0) {
        log(maxNum)
        return maxNum
    }
    nums = getMergeInt(nums)
    nums = getSliceNums(nums)

    log("slice", nums)
    if (nums.length === 1) {
        // 只有一个值
        return nums[0]
    } else {
        // 有 3 个及以上的值
        nums = getMerge(nums)
        maxNum = getMaxNum(nums)
        //
        // 这是比较猥琐的解法
        for (let i = 0; i < nums.length; i += 2) {
            for (let j = i + 2; j < nums.length; j += 2) {
                let arrIndex = [i, j]
                let arrNum = nums.slice(arrIndex[0], arrIndex[1] + 1)
                let sum = sumArr(arrNum)
                if (sum > maxNum) {
                    maxNum = sum
                }
            }
        }
        log('maxNum', maxNum)
        return maxNum
    }
};

maxSubArray([-2,1,-3,4,-1,2,1,-5,4])