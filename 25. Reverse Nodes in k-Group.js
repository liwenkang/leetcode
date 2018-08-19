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
* Given this linked list: 1->2->3->4->5
* For k = 2, you should return: 2->1->4->3->5
* For k = 3, you should return: 3->2->1->4->5
* */

var reverseKGroup = function (head, k) {
    // var result = []
    var result = []
    while (head) {
        result.push(head.val)
        head = head.next
    }

    var array = []
    for (var i = 0; i < result.length; i += k) {
        if (i + k > result.length) {
            array.push(...result.slice(i))
            break
        }
        var arr = result.slice(i, i + k).reverse()
        array.push(...arr)
    }

    return array
};

reverseKGroup([1, 2, 3, 4, 5, 6], 3)