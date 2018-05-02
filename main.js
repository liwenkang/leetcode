var judgeNeighborNum = function (stones) {
    // 一步一步先判断
    // 第一步肯定是找到 1
    var position = 0
    var jump = 1

    // 不好穷举所有的情况, 从输入出发,依次查看数组中的每一项是否符合条件
    var largestNum = largest(stones)
    // log('largestNum', largestNum)
    var smallestNum = smallest(stones)
    // log('smallestNum', smallestNum)

    // 最极端的情况,有原地踏步,或者跳最远也跳不上去的情况
    if (stones[stones.length - 1] < smallestNum || stones[stones.length - 1] > largestNum) {
        // log('极端情况 false')
        return false
    }

    // 如何让青蛙能跳多远就跳多远
    // 删掉哪些,原本可以不存在的元素
    // [0, 1, 3, 5, 6, 8, 12, 17]
    // [0, 1, 3, 5, 8, 12, 17]
    // 对数组进行遍历,如果有 多个元素 位于同一段,选最大的那个,(也就是让青蛙尽可能往远的地方跳),然后重新遍历

    // 开始正常考虑 踩上去的 数组之间的差值
    // -1<= 后者差值比前者 <= 1
    for (var i = 0; i < (stones.length - 2); i++) {
        var dValue1 = stones[i + 1] - stones[i]
        // log('前者差值', dValue1)
        var dValue2 = stones[i + 2] - stones[i + 1]
        // log('后者差值', dValue2)
        if (dValue2 - dValue1 >= -1 && dValue2 - dValue1 <= 1) {
            // 符合条件
        } else {
            // log('dValue1', dValue1)
            // log('dValue2', dValue2)
            // log('差值 false')
            // 注意,第一次进行这样的判断时,很可能误判,比如
            // [0,1,3,6,8,10,14,15]
            // 可以看出
            // 10 - 8  = 2
            // 14 - 10 = 4
            // 看起来青蛙跳不过去,实际上青蛙轨迹是
            // [0,1,3,6,10,15]
            // 所以有必要去掉一些石头
            return false
        }
    }
    // log('true, 数组', stones, '符合条件')
    return true
}

var largest = function (arrNum) {
    var result = []
    for (var num = 0, i = 0; i < arrNum; i++) {
        num = num + i
        result.push(num)
    }
    // log(result)
    // log("largest num:", result[result.length - 1])
    // return result
    return result[result.length - 1]
}

var smallest = function (arrNum) {
    var result = []
    for (var i = 0; i < arrNum; i++) {
        result.push(i)
    }
    // log(result)
    // log("smallest num:", result[result.length - 1])
    // return result
    return result[result.length - 1]
}

var canCross = function (stones) {
    // 如果之前不能通过, 删掉一个元素仍然可以通过 canCross, 那么返回删除后仍符合条件的
    if (judgeNeighborNum(stones)) {
        log('能通过的数组为: ', stones)
        // log(stones)
        return stones
    } else {
        deleteFunction(stones)
    }
}

var deleteFunction = function (stones) {
    // 不能通过就要减,减到不能再减
    var newArr = stones
    for (var i = 2; i < newArr.length - 1; i++) {
        var resultArr = newArr.slice(0, i).concat(newArr.slice(i + 1))
        // log("剪切后:", resultArr)
        // 剪切
        if (judgeNeighborNum(resultArr)) {
            log("!!!!!!!!!!!!!!!!!!!!!!!!", resultArr)
            // break
            return resultArr
        } else {
            canCross(resultArr)
        }
    }
}

canCross([0, 1, 3, 5, 6, 8, 12, 17])