const log = console.log.bind(console);

// 广度优先搜索
var levelOrderBottom = function(root) {
    if (!root) {
        return []
    }
    var result = [];
    var stack = [];
    stack.push(root);
    while (stack.length > 0) {
        var temp = [];
        var data = [];
        for (var i = 0; i < stack.length; i++) {
            temp.push(stack[i].val);
            if (stack[i].left) {
                data.push(stack[i].left);
            }
            if (stack[i].right) {
                data.push(stack[i].right);
            }
        }
        result.push(temp);
        stack = data;
    }
    return result.reverse()
};

levelOrderBottom({
        val: 3,
        left: {
            val: 9,
            left: null,
            right: null
        },
        right: {
            val: 20,
            left: {
                val: 15,
                left: null,
                right: null
            },
            right: {
                val: 7,
                left: null,
                right: null
            }
        }
    }
);
