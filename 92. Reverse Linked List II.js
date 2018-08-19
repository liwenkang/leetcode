const log = console.log.bind(console)

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
var reverseBetween = function (head, m, n) {
    var arr = []
    while (head) {
        arr.push(head.val)
        head = head.next
    }

    var midArr = arr.slice(m - 1, n).reverse()
    var result = arr.slice(0, m - 1).concat(midArr, arr.slice(n))


    return arrayToNode(result)
}

reverseBetween({
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: {
                    val: 5,
                    next: null
                }
            }
        }
    }
}, 2, 4)