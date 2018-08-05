const log = console.log.bind(console)

var isSameTree = function (p, q) {
    var result1 = []

    function getArr1(p) {
        if (p) {
            result1.push(p.val)
            getArr1(p.left)
            getArr1(p.right)
        }else {
            result1.push(null)
        }
    }

    getArr1(p)

    var result2 = []

    function getArr2(q) {
        if (q) {
            result2.push(q.val)
            getArr2(q.left)
            getArr2(q.right)
        }else {
            result2.push(null)
        }
    }

    getArr2(q)

    return result1.toString() === result2.toString()
};

isSameTree({
        val: 1,
        left: {
            val: 2,
            left: null,
            right: null
        },
        right: {
            val: 3,
            left: null,
            right: null
        },
    },
    {
        val: 1,
        right: {
            val: 2,
            left: null,
            right: null
        },
        left: {
            val: 3,
            left: null,
            right: null
        },
    })