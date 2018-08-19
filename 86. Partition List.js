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
var partition = function (head, x) {
    var arr = []

    while (head) {
        arr.push(head.val)
        head = head.next
    }

    var preArr = arr.filter(function (value, index) {
        return value < x
    })

    var endArr = arr.filter(function (value, index) {
        return value >= x
    })
    var result = preArr.concat(endArr)

    return arrayToNode(result)
}

log(partition({
    val: 3,
    next: {
        val: 2,
        next: {
            val: 1,
            next: null
        }
    }
}, 2))