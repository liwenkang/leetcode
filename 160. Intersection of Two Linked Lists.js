const log = console.log.bind(console)

var getIntersectionNode = function (headA, headB) {
    if (headA === null || headB === null) {
        return null
    }

    var arrA = []
    var arrB = []
    var result = JSON.parse(JSON.stringify(headA))
    while (headA !== null) {
        arrA.push(headA.val)
        headA = headA.next
    }

    while (headB !== null) {
        arrB.push(headB.val)
        headB = headB.next
    }

    for (var i = 1; i <= arrA.length; i++) {
        var a = arrA.slice(-i)
        var b = arrB.slice(-i)
        if (a.toString() !== b.toString()) {
            var index = arrA.length + 1 - i
            break
        }
    }
    if (index === undefined) {
        var index = 0
    }

    for (var i = 0; i < index; i++) {
        result = result.next
    }
    return result
}

getIntersectionNode(null, null)