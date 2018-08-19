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

var rotateArr = function (array) {
    // 去掉后面的放前面
    var lastNum = array[array.length - 1]
    array.unshift(lastNum)
    array.pop()
    return array
}

var rotateRight = function (head, k) {
    var result = []
    while (head) {
        result.push(head.val)
        head = head.next
    }

    k = k % result.length

    while (k > 0) {
        result = rotateArr(result)
        k--
    }

    return arrayToNode(result)
};