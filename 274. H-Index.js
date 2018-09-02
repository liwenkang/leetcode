hIndex([3, 0, 6, 1, 5])

const log = console.log.bind(console)
/*
* 输入: citations = [3,0,6,1,5]
输出: 3
解释: 给定数组表示研究者总共有 5 篇论文，每篇论文相应的被引用了 3, 0, 6, 1, 5 次。
     由于研究者有 3 篇论文每篇至少被引用了 3 次，其余两篇论文每篇被引用不多于 3 次，所以她的 h 指数是 3。
     */
var hIndex = function (citations) {
    var count = 0
    citations.sort((a, b) => b - a)
    for(var i = 0; i < citations.length; i++) {
        if(citations[i] >= i+1) {
            count++
        }
    }
    return count
    // log(citations)
    // log(count)
}
