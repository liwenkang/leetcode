const log = console.log.bind(console)

var insertNode = function (listNode, val) {
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

var sortList = function (head) {
    let result = []
    while (head != null) {
        result.push(head.val)
        head = head.next
    }
    result.sort(function (a, b) {
        return a - b
    })

    return arrayToNode(result)
};