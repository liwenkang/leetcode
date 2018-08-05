const log = console.log.bind(console)


var reverseList = function (head) {
    var p1 = null
    var p2 = null
    var p3 = head

    while (p3.next !== null) {
        p2.next = p1
        p1 = p2
        p2 = p3
        p3 = p3.next
    }
    p2.next = p1
    return p2
}