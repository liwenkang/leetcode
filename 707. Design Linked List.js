const log = console.log.bind(console)

/**
 * Initialize your data structure here.
 */
var MyLinkedList = function () {
    this.head = null
    this.length = 0
}

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    // this 指向的就是链表
    // 已知的是 this.head 指向链表头部
    // this.length 是链表的长度
    if (index >= this.length || index < 0) {
        // 假设 链表 如下所示, this.head 就是 node this.length = 2
        // var node = {
        //     val: 1,
        //     next: {
        //         val: 2,
        //         next: null
        //     }
        // }
        return -1
    }

    var cur = this.head
    while (index > 0) {
        cur = cur.next
        index--
    }
    return cur.val
}

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    var newHead = {
        val: val,
        next: this.head
    }
    this.head = newHead
    this.length++
}

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    // 如果是个空链表
    if (this.length === 0) {
        // 直接加
        this.addAtHead(val)
        return
    }
    // 如果是个非空链表
    var cur = this.head
    var index = this.length - 1
    while (index > 0) {
        cur = cur.next
        index--
    }
    var newNode = {
        val: val,
        next: null
    }
    cur.next = newNode
    this.length++
}

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    // 连接两个链表
    if (index > this.length || index < 0) {
        return
    }
    if (index === 0) {
        this.addAtHead(val)
        return
    }
    if (index === this.length) {
        this.addAtTail(val)
        return
    }
    // 在中间加
    // 假设 链表 如下所示, this.head 就是 node this.length = 2 假设 index 为 1
    // var node = {
    //     val: 1,
    //     next: {
    //         val: 2,
    //         next: null
    //     }
    // }
    // 假设 index = 1
    var cur = this.head // node
    while (index > 1) { //
        cur = cur.next // cur = val 2 next null
        index-- // 0
    }
    // 此时 cur 就是 node
    var newNode = {
        val: val,
        next: cur.next
    }
    cur.next = newNode
    this.length++
}

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index >= this.length) {
        return
    }
    // 假设 index = 1 也就是删除第 2 个
    var cur = this.head // node
    while (index > 1) { //
        cur = cur.next // cur = val 2 next null
        index-- // 0
    }
    cur.next = cur.next.next
    this.length--
}

