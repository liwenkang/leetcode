var judgeDirectMerge = function (l1, l2) {
    var compareL1 = JSON.parse(JSON.stringify(l1))
    // 如果l1 的最后一个值 也小于 l2 的第一个值, 则直接加起来返回就行

    while (compareL1.next !== null) {
        compareL1 = compareL1.next
    }
    var valueL1 = compareL1.val
    var valueL2 = l2.val

    if (valueL1 <= valueL2) {
        var p = l1
        while (p.next !== null) {
            p = p.next
        }
        p.next = l2
        return l1
    } else {
        return false
    }
}

var mergeTwoLists = function (l1, l2) {
    if (l2 === null) {
        return l1
    }
    if (l1 === null) {
        return l2
    }

    var result = judgeDirectMerge(l1, l2) || judgeDirectMerge(l2, l1)

    if (result === false) {
        var curL1 = null
        var curL2 = null
        if (l1.val >= l2.val) {
            // l2 的值在前面
            curL2 = l2.next
            l2.next = l1
            curL1 = l2
        } else if (l1.val < l2.val) {
            var temp = l1
            while (temp.next.val < l2.val) {
                temp = temp.next
            }
            var node = {
                val: l2.val,
                next: temp.next
            }
            temp.next = node
            curL1 = l1
            curL2 = l2.next
        }
        result = mergeTwoLists(curL1, curL2)
        return result
    } else {
        return result
    }
};