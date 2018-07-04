const log = console.log.bind(console)

/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
    paragraph = paragraph.toLowerCase()
    var arr = paragraph.split(/\W/g)
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === "") {
            arr.splice(i, 1)
        }
    }
    // log("arr",arr)


    var result = []
    var maxCount = 0
    var maxStr = ""
    for (var i = 0; i < arr.length; i++) {
        if (!banned.includes(arr[i])) {
            var count = 1
            for (var j = i + 1; j < arr.length; j++) {
                // log("i,j",i,j)
                if (arr[j] === arr[i]) {
                    count++
                }
            }
            if(count > maxCount) {
                maxCount = count
                maxStr = arr[i]
            }
        }
    }
    // log("maxStr",maxStr)
    return maxStr
}

mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.",["hit"])