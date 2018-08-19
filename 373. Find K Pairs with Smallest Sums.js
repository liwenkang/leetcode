const log = console.log.bind(console)

var sumArr = function (arr) {
    return arr[0] + arr[1]
}

var kSmallestPairs = function (nums1, nums2, k) {
    var result = []

    for (var i = 0; i < nums1.length; i++) {
        for (var j = 0; j < nums2.length; j++) {
            result.push([nums1[i], nums2[j]])
        }
    }


    result.sort((a, b) => {
        return sumArr(a) - sumArr(b)
    })

    return result.slice(0, k)
}

log(kSmallestPairs([1, 1, 2], [1, 2, 3], 4))
