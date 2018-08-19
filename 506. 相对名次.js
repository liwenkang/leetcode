const log = console.log.bind(console)

/**
 * @param {number[]} nums
 * @return {string[]}
 Input: [5, 4, 3, 2, 1]
 Output: ["Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"]
 * 余下的两名运动员，我们只需要通过他们的成绩计算将其相对名次即可。
 */

var sortArr = function (array) {
    var tmp = array.slice()
    return tmp.sort((a, b) => b - a)
}

var findRelativeRanks = function (nums) {
    var sortNum = sortArr(nums)
    var one = nums.indexOf(sortNum[0])
    nums[one] = "Gold Medal"
    var two = nums.indexOf(sortNum[1])
    nums[two] = "Silver Medal"
    var three = nums.indexOf(sortNum[2])
    nums[three] = "Bronze Medal"
    // 还是数字的元素排序
    restArr = sortNum.slice(3)
    for (var i = 0; i < restArr.length; i++) {
        var index = nums.indexOf(restArr[i])
        nums[index] = 4 + i + ""
    }
    return nums
}

findRelativeRanks([1, 2, 3, 4, 5])
findRelativeRanks([5, 4, 3, 2, 1])