const log = console.log.bind(console)

var uncommonFromSentences = function (A, B) {
    // A B 合起来,删掉重复出现的字符串
    var arr = A.split(" ").concat(B.split(" "))
    for (var i = 0; i < arr.length; i++) {
        var flag = false
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                // 找到了相同的了
                flag = true
                arr.splice(j, 1)
                j--
            }
        }
        if (flag) {
            arr.splice(i, 1)
            i--
        }
    }
    return arr
}

uncommonFromSentences("this apple is sweet", "this apple is sour")
uncommonFromSentences("apple apple", "banana")