var removeElements = function (head, val) {
    if (head === null) {
        return []
    }
    while (head.val === val) {
        head = head.next
        if (head === null) {
            return []
        }
    }

    var temp = head
    if (head === null) {
        return []
    }

    if (temp.next === null) {
        if (temp.val === val) {
            return []
        } else {
            return temp
        }
    }

    for (var i = 0; ; i++) {
        if (temp.next.val === val) {
            temp.next = temp.next.next
        } else {
            temp = temp.next
        }
        if (temp.next === null) {
            break
        }
    }
    return head
};