// 一首凉凉送给链表

var log = console.log.bind(console)

// 单链
var ListNode = function (val) {
    this.val = val;
    this.next = null;
}

// 首先将输入的两数组合并后排序,然后再转换成链表的形式

var arrChangeToList = function (arr) {
    var list = new ListNode(arr[0])
    // 把 this 当作中间量进行传递
    list.next = new ListNode(arr[1])
    list.next.next = new ListNode(arr[2])

    // list.next.next.next = new ListNode(arr[3])

    //需要一个东西暂时存放 list.next 里的东西

    log(list)
    return list
};

var listChangeToArr = function (list) {
    var arr = []
    // log('list', list)
    // log('list.val', list.val)
    // log('list.next.val', list.next.val)
    // log('list.next.next.val', list.next.next.val)
    arr.push(list.val)
    arr.push(list.next.val)
    arr.push(list.next.next.val)
    log(arr)
}

arrChangeToList([1, 2, 3, 4])

// ListNode {
//     val: 1,
//     next: ListNode {
//         val: 2,
//         next: ListNode {
//             val: 3,
//             next: null
//         }
//     }
// }