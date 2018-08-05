const log = console.log.bind(console)

function ListNode(val) {
    this.val = val
    this.next = null
}


var splitListToParts = function (root, k) {
    // 注意返回的值也是 链表
    var oldRoot = JSON.parse(JSON.stringify(root))

    var length = 0
    while (oldRoot) {
        arr.push(oldRoot.val)
        length++
        oldRoot = oldRoot.next
    }
    var arr = []
    log(arr)
    log(length)

    if (arr.length === 0) {
        return // k 个 []
    }

    // k 是份数

    if (length < k) {
        for (var i = 0; i < arr.length; i++) {
            arr[i] = [arr[i]]
        }


    }
    else if (length === k) {
        // 一个数组一个值, 正好
    } else {
        // 一个数组多个值
        if (length % k === 0) {
            // 恰好全处理完
        } else {
            // plusK 为 1 那么 第一个就加 1 个
            // plusK 为 2 那么 第一个就加 2 个
            // plusK 为 3 那么 第一个就加 3 个
            var plusK = length % k


        }
    }
}

splitListToParts({
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: null
        }
    }
}, 5)