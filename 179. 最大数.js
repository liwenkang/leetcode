/**
 * 给定一个非负整数的列表，重新排列它们的顺序把他们组成一个最大的整数。
 * 例如，给定 [3, 30, 34, 5, 9],最大的组成数是 9534330.
 * 注意: 结果可能非常大，所以您需要返回一个字符串而不是整数。
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
    // 输入的是一个数组,所以需要遍历
    // 按照优先级, 从高到低排列
    for (var i = 0; i < nums.length; i++) {
        if (compareNum(nums[i], nums[i + 1]) === false) {
            // 说明后面的数字优先级更高,那么进行交换
            var z = nums[i]
            nums[i] = nums[i + 1]
            nums[i + 1] = z
            // 交换之后,从头开始遍历
            i = -1
            // console.log(nums) // test log
        } else {
            // 前面的数字比后面的优先级更高, 啥也不做
        }
    }
    console.log(nums.join(""), "最终结果") // test log

    return nums.join("")
};

var resolveNum = function (num) {
    // 直接把数字分解成一位一位的,比如 1234 分解为 [1,2,3,4]
    if (num === 0) {
        // console.log([0])
        return [0]
    } else {
        var x = num
        var arr = []
        while (x > 0) {
            // 循环多少次? 根据数字的位数确定
            if (x % 10 === 0) {
                arr.push(0)
                x = parseInt(x / 10)
            } else if (x % 10 > 0) {
                arr.push(x % 10)
                x = parseInt(x / 10)
            }
        }
        // console.log(arr.reverse(), "分解后的结果") // test log
        return arr.reverse()
    }
}

var compareNum = function (x, y) {
    // 首先,考虑数字的优先级,比如对于个位数字 9 的优先级就最大 9 > 0
    // 十位 99 > 10
    // 百位 999 > 100
    // 而且999 和 99 和 9 是相同优先级
    // 而 998 优先级 低于 99
    // 从最高位开始比较
    // 如果前一个数字的最高位高于后一个数字的最高位,那么它优先级高  比如 80 > 79
    // 如果最高位相同,再比较下一位  82 > 81
    // 如果前一个数字已经没有下一位了,那么前面的数字优先级高 8 > 79   88 > 8800
    // 如果后一个数字已经没有下一位了,那么前面的数字优先级高 80 > 7

    var arrX = resolveNum(x)
    // console.log('arrX', 'X', x, arrX)
    var arrY = resolveNum(y)
    // console.log('arrY', 'Y', y, arrY)

    for (var i = 0; i < arrX.length; i++) {
        for (var j = i; j < arrY.length; j++) {
            if (arrX[i] > arrY[j]) {
                // console.log(arrX[i])
                // console.log(arrY[j])
                // console.log("前面的优先级高")
                return true
            } else if (arrX[i] === arrY[j]) {
                // 如果前一个,或者后一个数组位数不够了,那么不够的那个优先级高
                if (arrX[i + 1] === undefined && arrY[i + 1] !== undefined) {
                    // 前一个位不够, 后一个够, 那么分情况讨论
                    // 如果多出来的数字大,那么优先级就高优先级高      3 < 34     因为 343 > 334
                    // 如果多出来的数字小,那么优先级就低              3 > 30      因为 330 > 303
                    // 如果多出来的数字相等,那么优先级就低            3 > 30      因为 330 > 303
                    if (arrY[i + 1] > arrX[i]) {
                        return false
                    } else {
                        return true
                    }
                } else if (arrX[i + 1] !== undefined && arrY[i + 1] === undefined) {
                    if (arrX[i + 1] > arrY[i]) {
                        return true
                    } else {
                        return false
                    }
                } else {
                    // console.log(arrX[i])
                    // console.log(arrY[j])
                    // console.log("继续往下算")
                    break
                }
            } else {
                // console.log(arrX[i])
                // console.log(arrY[j])
                // console.log("后面的大")
                return false
            }
        }
    }
}

largestNumber([1,0])
