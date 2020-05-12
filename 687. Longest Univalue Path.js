const log = console.log.bind(console);

var longestUnivaluePath = function(root) {
    if (!root) {
        return 0;
    }

    var max = 0;

    function traverse(root) {
        var left = 0;
        var right = 0;

        if (root.left) {
            if (root.val === root.left.val) {
                left = traverse(root.left) + 1;
            } else {
                traverse(root.left);
            }
        }

        if (root.right) {
            if (root.val === root.right.val) {
                right = traverse(root.right) + 1;
            } else {
                traverse(root.right);
            }
        }

        max = Math.max(left + right, max);
        return Math.max(left, right);
    }

    traverse(root);
    return max;
};

// longestUnivaluePath({
//     val: 5,
//     left: {
//         val: 4,
//         left: {
//             val: 1,
//             left: null,
//             right: null
//         },
//         right: {
//             val: 1,
//             left: null,
//             right: null
//         }
//     },
//     right: {
//         val: 5,
//         left: null,
//         right: {
//             val: 5,
//             left: null,
//             right: null
//         }
//     }
// });
//
//
longestUnivaluePath({
    val: 1,
    left: {
        val: 4,
        left: {
            val: 4,
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
        val: 5,
        left: {
            val: 5,
            left: null,
            right: null
        },
        right: null
    }
});
//
// longestUnivaluePath({
//     val: 1,
//     left: {
//         val: 2,
//         left: {
//             val: 2,
//             left: {
//                 val: 2,
//                 left: null,
//                 right: null
//             },
//             right: null
//         },
//         right: {
//             val: 2,
//             left: null,
//             right: null
//         }
//     },
//     right: {
//         val: 2,
//         left: {
//             val: 2,
//             left: null,
//             right: null
//         },
//         right: {
//             val: 2,
//             left: null,
//             right: null
//         }
//     }
// });
