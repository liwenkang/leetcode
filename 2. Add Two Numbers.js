const log = console.log.bind(console)


var addStrings = function (num1, num2) {
    var len1 = num1.length
    var len2 = num2.length
    var sum = '', val1, val2
    var i = 0, j = 0
    var inn = 1
    while (len1 > 0 || len2 > 0) {

        val1 = +(len1 > 0 ? num1[len1 - 1] : 0)
        val2 = +(len2 > 0 ? num2[len2 - 1] : 0)
        i += (val1 + val2 + j)
        j = 0
        while (i >= 10) {
            i -= 10
            j++
        }
        sum = i + '' + sum
        i = 0
        inn *= 10
        len1--
        len2--
    }
    if (j > 0) {
        sum = j + sum
    }
    return sum
}

/*
* Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
* Output: 7 -> 0 -> 8
* Explanation: 342 + 465 = 807.
* */
function insertNode(listNode, val) {
    // 在末尾插入 val
    var newNode = new ListNode(val)
    newNode.next = null
    var changeListNode = listNode
    while (changeListNode.next) {
        changeListNode = changeListNode.next
    }
    changeListNode.next = newNode
    return listNode
}

var arrayToNode = function (ary) {
    if (ary.length === 0) {
        return null
    }
    var node = new ListNode(ary[0])
    node.next = null
    for (var i = 1; i < ary.length; i++) {
        node = insertNode(node, ary[i])
    }
    return node
}

var addTwoNumbers = function (l1, l2) {
    var num1 = ""
    while (l1) {
        num1 = l1.val + num1
        l1 = l1.next
    }

    var num2 = ""
    while (l2) {
        num2 = l2.val + num2
        l2 = l2.next
    }

    var result = addStrings(num1, num2)
    result = result.toString().split("").reverse()
    for (var i = 0; i < result.length; i++) {
        result[i] = parseInt(result[i])
    }
    return arrayToNode(result)
}

log(addTwoNumbers({
        val: 2,
        next: {
            val: 4,
            next: {
                val: 3,
                next: null
            }
        }
    },
    {
        val: 5,
        next: {
            val: 6,
            next: {
                val: 4,
                next: null
            }
        }
    }))