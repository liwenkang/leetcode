const log = console.log.bind(console)

var tree2str = function (t) {
    // 深度优先搜索
    //
    if (t === null) {
        return ""
    }
    if (t.left === null && t.right === null) {
        // 两边都没有
        return t.val + ""
    } else if (t.right === null) {
        // 右边没有, 左边有
        return t.val + "(" + tree2str(t.left) + ")"
    } else if (t.left === null) {
        // 左边没有, 右边有
        return t.val + "()(" + tree2str(t.right) + ")"
    } else {
        // 两边都有
        return t.val + "(" + tree2str(t.left) + ")(" + tree2str(t.right) + ")"
    }
}

// 1(2)()(4)()()(3)()()
// 1(2()(4()()(3()()


tree2str({
    val: 1,
    left: {
        val: 2,
        left: null,
        right: {
            val: 4,
            left: null,
            right: null
        },
    },
    right: {
        val: 3,
        left: null,
        right: null
    }
})