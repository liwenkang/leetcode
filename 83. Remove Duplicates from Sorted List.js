var deleteDuplicates = function (head) {
    if(!head) {
        return []
    }
    var temp = head

    for (var i = 0; ; i++) {
        if (temp.next === null) {
            break
        }
        if (temp.val === temp.next.val) {
            temp.next = temp.next.next
        } else {
            temp = temp.next
        }
    }
    return head
};