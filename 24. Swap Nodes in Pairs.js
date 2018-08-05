var swapPairs = function (head) {
    var cur = head
    var length = 0
    var old = JSON.parse(JSON.stringify(head))

    while (old) {
        old = old.next
        length++
    }

    if (length === 1) {
        return head
    }

    if (length % 2 === 0) {
        for (var i = 0; i < length; i += 2) {
            if (i === length - 2) {
                var tmp = cur.val
                cur.val = cur.next.val
                cur.next.val = tmp
            } else {
                var tmp = cur.val
                cur.val = cur.next.val
                cur.next.val = tmp
                cur = cur.next.next
            }
        }
    } else {
        for (var i = 0; i < length; i += 2) {
            var tmp = cur.val
            cur.val = cur.next.val
            cur.next.val = tmp
            if (i === length - 3) {
                return head
            } else {
                cur = cur.next.next
            }
        }
    }
    return head
}
