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

var addTwoNumbers = function (l1, l2) {
    var arrl1 = []
    var arrl2 = []

    while (l1) {
        arrl1.push(l1.val)
        l1 = l1.next
    }

    while (l2) {
        arrl2.push(l2.val)
        l2 = l2.next
    }

    if (arrl1.length === 0 && arrl2.length === 0) {
        return []
    }

    var num1 = arrl1.join("")
    var num2 = arrl2.join("")

    var sum = addStrings(num1, num2)

    var resultArr = sum.split("")

    var length = resultArr.length

    if (length >= 3) {
        var listNode = new ListNode(parseInt(resultArr[0]))
        listNode.next = new ListNode(parseInt(resultArr[1]))
        var node = listNode.next
        node.next = new ListNode(parseInt(resultArr[2]))
        var k = 3
        while (length - 3 > 0) {
            var node2 = node.next
            node2.next = new ListNode(parseInt(resultArr[k++]))
            node = node.next
            length--
        }
        return listNode
    } else if (length === 2) {
        var listNode = new ListNode(parseInt(resultArr[0]))
        listNode.next = new ListNode(parseInt(resultArr[1]))
        listNode.next.next = null
        return listNode
    } else if (length === 1) {
        var listNode = new ListNode(parseInt(resultArr[0]))
        listNode.next = null
        return listNode
    }
};