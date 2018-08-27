const log = console.log.bind(console)

var permuteUnique = function (nums) {
    var ans = [[]]
    for (var n of nums) {
        var new_ans = []
        for (var l of ans) {
            for (var i = 0; i < l.length + 1; i++) {
                new_ans.push(l.slice(0, i).concat([n], l.slice(i)))
                if (i < l.length && l[i] === n) {
                    break
                }
            }
        }
        ans = new_ans
    }
    return ans
}


log(permuteUnique([1, 1, 2]))