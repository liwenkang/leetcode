const log = console.log.bind(console)

var lowestCommonAncestor = function (root, p, q) {
    // 输入 node , 输出 node
    if (!root || root === p || root === q) {
        return root
    }

    var left = lowestCommonAncestor(root.left, p, q)
    var right = lowestCommonAncestor(root.right, p, q)

    if (left && right) {
        // 两边都有
        return root
    }

    return left || right
}

log(lowestCommonAncestor({
        val: 3,
        left: {
            val: 5,
            left: {
                val: 6,
                left: null,
                right: null
            },
            right: {
                val: 2,
                left: {
                    val: 7,
                    left: null,
                    right: null
                },
                right: {
                    val: 4,
                    left: null,
                    right: null
                }
            }
        },
        right: {
            val: 1,
            left: {
                val: 0,
                left: null,
                right: null
            },
            right: {
                val: 8,
                left: null,
                right: null
            }
        }
    }, {
        val: 5,
        left: {
            val: 6,
            left: null,
            right: null
        },
        right: {
            val: 2,
            left: {
                val: 7,
                left: null,
                right: null
            },
            right: {
                val: 4,
                left: null,
                right: null
            }
        }
    },
    {
        val: 1,
        left: {
            val: 0,
            left: null,
            right: null
        },
        right: {
            val: 8,
            left: null,
            right: null
        }
    }))


log(lowestCommonAncestor({
        val: 3,
        left: {
            val: 5,
            left: {
                val: 6,
                left: null,
                right: null
            },
            right: {
                val: 2,
                left: {
                    val: 7,
                    left: null,
                    right: null
                },
                right: {
                    val: 4,
                    left: null,
                    right: null
                }
            }
        },
        right: {
            val: 1,
            left: {
                val: 0,
                left: null,
                right: null
            },
            right: {
                val: 8,
                left: null,
                right: null
            }
        }
    }, {
        val: 5,
        left: {
            val: 6,
            left: null,
            right: null
        },
        right: {
            val: 2,
            left: {
                val: 7,
                left: null,
                right: null
            },
            right: {
                val: 4,
                left: null,
                right: null
            }
        }
    },
    {
        val: 4,
        left: null,
        right: null
    }))