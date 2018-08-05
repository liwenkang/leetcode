const log = console.log.bind(console)

var listToArr = function (resultArr, length = resultArr.length) {
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
    } else {
        return []
    }
}
