const log = console.log.bind(console)

/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function (S) {
    var arr = []
    for (var i = 0; i < S.length; i++) {
        var index = S.lastIndexOf(S[i])
        arr.push([i, index])
    }
    // 合并
    for (var i = 1; i < arr.length - 1; i++) {
        if (arr[i][0] <= arr[i - 1][1] && arr[i][1] >= arr[i - 1][1]) {
            // 两者合并
            arr[i - 1] = [arr[i - 1][0], arr[i][1]]
            arr.splice(i, 1)
            i--
        } else if (arr[i][0] >= arr[i - 1][0] && arr[i][1] <= arr[i - 1][1]) {
            arr[i - 1] = [arr[i - 1][0], arr[i - 1][1]]
            arr.splice(i, 1)
            i--
        }
    }
    var result = []
    if (arr[arr.length - 1][0] === arr[arr.length - 2][1]) {
        arr.splice(arr.length - 1, 1)
    }
    for (var i = 0; i < arr.length; i++) {
        result.push(arr[i][1] - arr[i][0] + 1)
    }
    return result
}

partitionLabels("ababcbacadefegdehijhklij")
partitionLabels("eaaaabaaec")