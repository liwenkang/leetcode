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

/*
Input:
[
  1->4->5,
  1->3->4,
  2->6
]
Output: 1->1->2->3->4->4->5->6
* */

var mergeKLists = function (lists) {
    var result = []
    for (var i = 0; i < lists.length; i++) {
        while (lists[i]) {
            result.push(lists[i].val)
            lists[i] = lists[i].next
        }
    }
    result.sort(function (a, b) {
        return a - b
    })
    return arrayToNode(result)
}