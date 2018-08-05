const log = console.log.bind(console)

var arrToList = function (array, length = array.length) {
    if (length >= 3) {
        var listNode = new ListNode(parseInt(array[0]))
        listNode.next = new ListNode(parseInt(array[1]))
        var node = listNode.next
        node.next = new ListNode(parseInt(array[2]))
        var k = 3
        while (length - 3 > 0) {
            var node2 = node.next
            node2.next = new ListNode(parseInt(array[k++]))
            node = node.next
            length--
        }
        return listNode
    } else if (length === 2) {
        var listNode = new ListNode(parseInt(array[0]))
        listNode.next = new ListNode(parseInt(array[1]))
        listNode.next.next = null
        return listNode
    } else if (length === 1) {
        var listNode = new ListNode(parseInt(array[0]))
        listNode.next = null
        return listNode
    } else {
        return []
    }
}

var partition = function (head, x) {
    var arr = []
    while (head) {
        arr.push(head.val)
        head = head.next
    }

    var lessArr = []
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < x) {
            lessArr.push(arr.splice(i, 1)[0])
            i--
        }
    }

    var result = lessArr.concat(arr)
    // 数组转换为链表
    return arrToList(result)
}

partition({
    val: 1,
    next: {
        val: 4,
        next: {
            val: 3,
            next: {
                val: 2,
                next: {
                    val: 5,
                    next: {
                        val: 2,
                        next: null
                    }
                }
            }
        }
    }
}, 3)