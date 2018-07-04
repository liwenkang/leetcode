const log = console.log.bind(console)

/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function (S) {
    var arr = []
    for (var i = 0; i < S.length; i++) {
        var num = parseInt(S[i])
        if (!(num >= 0 && num <= 9)) {
            arr.push(i)
        }
    }
    log(arr)

    var result = []
    for (var i = 1; i <= arr.length; i++) {
        // i 表示的是元素的个数

        if (i === 1) {
            for (var m = 0; m < arr.length; m++) {
                result.push([arr[m]])
            }
        }

        if (i === 2) {
            for (var m = 0; m < arr.length; m++) {
                for (var n = m + 1; n < arr.length; n++) {
                    result.push([arr[m], arr[n]])
                }
            }
        }

        if (i === 3) {
            for (var m = 0; m < arr.length; m++) {
                for (var n = m + 1; n < arr.length; n++) {
                    for(var o = n+1; o < arr.length; o++) {
                        result.push([arr[m], arr[n],arr[o]])
                    }
                }
            }
        }
    }

    log("result",result)
}

letterCasePermutation("a1b2c3")