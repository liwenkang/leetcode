const log = console.log.bind(console)

var findTarget = function (root, k) {
    var result = []
    var getArr = function (root) {
        if (root) {
            result.push(root.val)
            getArr(root.left)
            getArr(root.right)
        }
    }
    getArr(root)
    // 在数组中查找两个和为 k 的值
    result.sort(function (a, b) {
        return a - b
    })

    for (var i = 0; i < result.length; i++) {
        for (var j = i + 1; j < result.length; j++) {
            if(result[i] + result[j] === k){
                return true
            }
        }
    }
    return false
}

findTarget({
    val: 5,
    left: {
        val: 3,
        left: {
            val: 2,
            left: null,
            right: null
        },
        right: {
            val: 4,
            left: null,
            right: null
        }
    },
    right: {
        val: 6,
        left: null,
        right: {
            val: 7,
            left: null,
            right: null
        }
    },
})