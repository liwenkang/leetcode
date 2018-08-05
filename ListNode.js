const log = console.log.bind(console)

// 1. 将数组转换成队列的方法,默认传入的数组至少包含一项

// 1.1 使用了额外的空间(数组)来存放节点,之后再串起来
/*
var arrayToList = function (ary) {
    var nodes = []
    for (var i = 0; i < ary.length; i++) {
        // 产生新的节点
        var node = {
            value: ary[i],
            next: null,
        }
        // 加到 List 中
        nodes.push(node)
    }
    for (var i = 0; i < nodes.length - 1; i++) {
        // 将每个 List 中节点的 next 指向下一个节点, 注意最后一个不需要指定
        nodes[i].next = nodes[i + 1]
    }
    return nodes[0]
}
*/
// 1.2 一个一个生成节点,在生成的同时就把节点连起来了
/*
var arrayToList = function (ary) {
    var head = {
        value: ary[0],
        next: null
    }
    var preNode = head

    for (var i = 1; i < ary.length; i++) {
        var node = {
            value: ary[i],
            next: null
        }
        preNode.next = node
        preNode = node
    }
    // log("head", head)
    return head
}
*/
// 1.3 使用递归生成链表, 从 start 位置开始创建一个链表
/*
var arrayToList = function (ary, start = 0) {
    if (start === ary.length) {
        return null
    }
    var node = {
        value: ary[start],
        next: null
    }
    var rest = arrayToList(ary, start + 1)
    node.next = rest
    return node
}
*/


// 2. 将链表转换为数组,默认链表的长度大于等于 1

// 2.1 循环取到每一个 list.value 的值,直到 list 为 null
/*
var listToArray = function (list) {
    var arr = []
    while (list) {
        arr.push(list.value)
        list = list.next
    }
    return arr
}
*/
// 2.2 递归 取到这个和下一个 list.value 的值,再拼接起来
/*
var listToArray = function (list) {
    if (!list) {
        return []
    }
    var result = [list.value]
    var restValue = listToArray(list.next)
    return result.concat(restValue)
}
*/

// 3. 在链表的开始插入一个节点
/*
var prepend = function (head, value) {
    var obj = {
        value: value,
        next: head
    }
    return obj
}
*/

// 4. 返回链表中第 n 个节点的值(n >= 1)

// 4.1 循环得到 head 的 value,以及 head.next 的 value...
/*
var nth = function (head, n) {
    var value
    var count = 0
    while (count < n) {
        if (head === null) {
            return undefined
        } else {
            value = head.value
            head = head.next
            count++
        }
    }
    return value
}
*/
// 4.2 返回 head 第 n 个值, 就相当于返回 head.next 的 n-1 的值
/*
var nth = function (head, n) {
    if (head === null) {
        return undefined
    }
    if (n === 1) {
        return head.value
    }
    return nth(head.next, n - 1)
}
*/

// 5. 在链表中查找给定的节点值,并返回截断后的链表
/*
var find = function (head, val) {
    while (head.value !== val) {
        head = head.next
    }
    return head
}
*/

// 6. 向链表中插入一个新的节点, 新节点的下标是 n

// 6.1 通过新建节点,再连起来
/*
var insert = function (head, n, value) {
    if (n < 0) {
        return false
    }
    // 在 n 的位置添加
    // todo 如何取到前 n 个 node?
    var node = {
        value: value,
        next: null
    }
    if (n === 0) {
        node.next = head
        return node
    }

    if (head === null) {
        return node
    }

    var p = head

    for (var i = 0; i < n - 1; i++) {
        p = p.next
        if (p === null) {
            return false
        }
    }
    // p 指向了前一个
    node.next = p.next
    p.next = node
    return head
}
*/
// 6.2 递归方法
// 6.2.1 第一种递归: 注意递归的解法,当 n > 节点个数的时候, 会直接报错
/*
var insert = function (head, n, value) {
    // 相当于 head.next 的 n - 1 的位置,插入 value
    var node = {
        value: value,
        next: null
    }

    if (n === 0) {
        node.next = head
        return node
    }

    head.next = insert(head.next, n - 1, value)
    return head
}
*/
// 6.2.2 第二种递归: 注意递归的解法,当 n > 节点个数的时候, 会添加到末尾
/*
var insert = function (head, n, value) {
    // 相当于 head.next 的 n - 1 的位置,插入 value
    var node = {
        value: value,
        next: null
    }

    if (n === 0) {
        node.next = head
        return node
    }

    if (head === null) {
        return node
    }

    head.next = insert(head.next, n - 1, value)
    return head
}
*/
// 6.2.2 第三种递归: 注意递归的解法,当 n > 节点个数的时候, 不会发生添加操作
/*
var insert = function (head, n, value) {
    // 相当于 head.next 的 n - 1 的位置,插入 value
    var node = {
        value: value,
        next: null
    }

    if (n === 0) {
        node.next = head
        return node
    }

    if (head === null) {
        if (n > 0) {
            // 因为此时已经遍历到最后一个节点, 如果 n > 0 ,说明 n 是大于节点数的
            return null
        } else {
            return node
        }
    }

    head.next = insert(head.next, n - 1, value)
    return head
}
*/

// 7. 在链表中删除一个节点
// 递归求解, 当 n 大于节点数的时候, 不执行删除操作
/*
var remove = function (head, n) {
    if (n < 0) {
        return false
    }
    if (n === 0) {
        log("n",n)
        if(head === null) {
            return null
        }
        return head.next
    }

    if (head === null) {
        log("n",n)
        return null
    }

    head.next = remove(head.next, n - 1)
    return head
}
*/