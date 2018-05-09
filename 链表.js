// 链表
// LinkedList
// [1, 2, 3, 4, 15, 16, 27]
// [1, 2, 3, 0, 4, 5, 6, 7]

// 链表实现
//
var Node = function(e) {
    this.element = e
    this.next = null
}
/*
var n1 = new Node(1)
var n2 = new Node(2)
var n3 = new Node(3)
n1.next = n2
n2.next = n3

var n = n1
while(n != null) {
    log('遍历链表', n.element)
    n = n.next
}
*/

var LinkedList = function() {
    this.head = new Node()
    this._length = 0
}

// 在链表末尾增加一个元素
LinkedList.prototype.append = function(e) {
    var node = new Node(e)
    var n = this.head
    while(n.next != null) {
        n = n.next
    }
    n.next = node
    //
    this._length++
}

// 返回一个元素的 index
LinkedList.prototype.indexOf = function(e) {
    var index = -1
    var n = this.head
    var i = 0
    while(n.next != null) {
        if (e === n.element) {
            index = i
            break
        }
        n = n.next
        i++
    }
    return index
}

// 返回链表的长度
LinkedList.prototype.length = function() {
    return this._length
}

LinkedList.prototype.log = function() {
    var n = this.head.next
    log('遍历链表')
    while(n != null) {
        log(' > ', n.element)
        n = n.next
    }
}

var list = new LinkedList()
list.append('hello')
list.append('gua')
list.append('你好')
list.log()
log(list.length())
